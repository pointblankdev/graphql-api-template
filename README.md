# graphql-api-template

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
- Make sure you set the primary key to `id`, uncheck "default settings" and select `ON-DEMAND`/`PAY-PER-REQUEST` billing.

### Environment Variables

- Rename `example.env` to `.env`.
