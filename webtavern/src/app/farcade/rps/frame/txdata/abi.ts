
export const GAME_ABI = [

    {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "address",
                    "name": "value",
                    "type": "address"
                  }
                ],
                "internalType": "struct AddressKey[]",
                "name": "addresses",
                "type": "tuple[]"
              },
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "uint256",
                    "name": "value",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct UintKey[]",
                "name": "uints",
                "type": "tuple[]"
              },
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "value",
                    "type": "string"
                  }
                ],
                "internalType": "struct StringKey[]",
                "name": "strings",
                "type": "tuple[]"
              }
            ],
            "internalType": "struct FlowParams",
            "name": "params",
            "type": "tuple"
          }
        ],
        "name": "executeFlow",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
]