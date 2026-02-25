import { defineBackend } from '@aws-amplify/backend';
import { CfnGraphQLApi } from 'aws-cdk-lib/aws-appsync';
import { Rule, Schedule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';

import { auth } from './auth/resource';
import { data } from './data/resource';
import { seedHandler } from './functions/seed-handler/resource';

const backend = defineBackend({
  auth,
  data,
  seedHandler,
});

const cfnApi = backend.data.resources.cfnResources.cfnGraphqlApi;
const appsyncUrl = cfnApi.attrGraphQlUrl;

backend.seedHandler.addEnvironment('AMPLIFY_DATA_GRAPHQL_ENDPOINT', appsyncUrl);

const appsyncPolicy = new PolicyStatement({
  actions: ['appsync:GraphQL'],
  resources: [`${backend.data.resources.graphqlApi.arn}/*`],
});

backend.seedHandler.resources.lambda.addToRolePolicy(appsyncPolicy);

const rule = new Rule(backend.seedHandler.resources.lambda.stack, 'ScheduleRule', {
  schedule: Schedule.expression('rate(1 minute)'),
});

rule.addTarget(new LambdaFunction(backend.seedHandler.resources.lambda));
