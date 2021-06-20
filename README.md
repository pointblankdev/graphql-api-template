# graphql-api-template

<a href="https://gitmoji.dev" >
  <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji" style="border-radius: 3px">
</a>

This project includes:

- express api for running locally
- lambda when run on aws
- graphql interface with playground
- apollo federated schema
- jest for testing
- dynamite for database client

## Setup Steps

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
