# graphql-api-template

This project includes:

- express api for running locally
- lambda when run on aws
- graphql interface with playground
- apollo federated schema
- jest for testing
- dynamite for database client

## Setup Steps

First, setup up your AWS access by installing the AWS CLI.

Google "aws cli" and click the first link.

After that's complete, run `aws configure` and input your AWS credentials.

Sign in to AWS and create a DynamoDB table.

Make sure you set the primary key to `id`, uncheck "default settings" and select `ON-DEMAND`/`PAY-PER-REQUEST` billing.

Rename `example.env` to `.env`.
