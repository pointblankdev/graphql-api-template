# graphql-api-template

<a href="https://gitmoji.dev" >
  <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji">
</a>

<br />
<br />

#### This starter includes:

- `apollo-server` when run locally
- `apollo-server-lambda` when run on AWS
- `@apollo/federation` schema pre-configured
- `@pointblankdev/dynamite` for DynamoDB database client
- `serverless` for infrastructure-as-code to AWS
- `jest` for testing with recommended extentions
- Github Actions for CI/CD

<br />

## Getting Started

### Amazon Web Services

- First, setup up your AWS access by installing the [AWS CLI tools](https://aws.amazon.com/cli/).
- After that's complete, run `aws configure` and input your AWS credentials.

### Database

- Sign in to AWS and create a DynamoDB table.
- Pick any table name and set your primary key to `id`.
- Uncheck "Use default settings" and select `On-demand` for Read/write capacity mode.
- Leave all other settings unchanged.

### Environment Variables

#### Local development

- Rename `example.env` to `.env`.
- Set `DYNAMITE_TABLE` to the table name you selected for the database.

#### Github Actions

- Set AWS credentials as secrets in Github.

#### AWS Lambda

- Set `DYNAMITE_TABLE` to the table name you selected for the database.
