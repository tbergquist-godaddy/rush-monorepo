/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type signupMutationVariables = {|
  password: string,
  email: string,
|};
export type signupMutationResponse = {|
  +createAccount: {|
    +message?: string,
    +__typename: "Identity",
  |}
|};
export type signupMutation = {|
  variables: signupMutationVariables,
  response: signupMutationResponse,
|};
*/

/*
mutation signupMutation(
  $password: String!
  $email: String!
) {
  createAccount(password: $password, email: $email) {
    __typename
    ... on Identity {
      __typename
    }
    ... on Error {
      __isError: __typename
      message
    }
  }
}
*/

const node /*: ConcreteRequest*/ = (function () {
  var v0 = {
      defaultValue: null,
      kind: 'LocalArgument',
      name: 'email',
    },
    v1 = {
      defaultValue: null,
      kind: 'LocalArgument',
      name: 'password',
    },
    v2 = [
      {
        kind: 'Variable',
        name: 'email',
        variableName: 'email',
      },
      {
        kind: 'Variable',
        name: 'password',
        variableName: 'password',
      },
    ],
    v3 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: '__typename',
      storageKey: null,
    },
    v4 = {
      kind: 'InlineFragment',
      selections: [
        {
          alias: null,
          args: null,
          kind: 'ScalarField',
          name: 'message',
          storageKey: null,
        },
      ],
      type: 'Error',
      abstractKey: '__isError',
    };
  return {
    fragment: {
      argumentDefinitions: [(v0 /*: any*/), (v1 /*: any*/)],
      kind: 'Fragment',
      metadata: null,
      name: 'signupMutation',
      selections: [
        {
          alias: null,
          args: (v2 /*: any*/),
          concreteType: null,
          kind: 'LinkedField',
          name: 'createAccount',
          plural: false,
          selections: [
            {
              kind: 'InlineFragment',
              selections: [(v3 /*: any*/)],
              type: 'Identity',
              abstractKey: null,
            },
            (v4 /*: any*/),
          ],
          storageKey: null,
        },
      ],
      type: 'Mutation',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [(v1 /*: any*/), (v0 /*: any*/)],
      kind: 'Operation',
      name: 'signupMutation',
      selections: [
        {
          alias: null,
          args: (v2 /*: any*/),
          concreteType: null,
          kind: 'LinkedField',
          name: 'createAccount',
          plural: false,
          selections: [(v3 /*: any*/), (v4 /*: any*/)],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: 'fd7adce79666e3b5de917af5fb4308b0',
      id: null,
      metadata: {},
      name: 'signupMutation',
      operationKind: 'mutation',
      text:
        'mutation signupMutation(\n  $password: String!\n  $email: String!\n) {\n  createAccount(password: $password, email: $email) {\n    __typename\n    ... on Identity {\n      __typename\n    }\n    ... on Error {\n      __isError: __typename\n      message\n    }\n  }\n}\n',
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '88c03c4b859eb3ed3a60442ae7c63ec1';

module.exports = node;
