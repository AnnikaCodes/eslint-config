module.exports = {
  "parserOptions": {
    "ecmaVersion": 10,
    "sourceType": "script",
    "ecmaFeatures": {
      "globalReturn": true
    }
  },
  "ignorePatterns": ["node_modules/"],
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-console": "off",

    // bad code, modern (new code patterns we don't like because they're less readable or performant)
    "no-restricted-globals": ["error", "Proxy", "Reflect", "WeakSet"],

    // bad code, deprecated (deprecated/bad patterns that should be written a different way)
    "eqeqeq": "error",
    "func-names": "off", // has minor advantages but way too verbose, hurting readability
    "guard-for-in": "off", // guarding is a deprecated pattern, we just use no-extend-native instead
    "init-declarations": "off", // TypeScript lets us delay initialization safely
    "no-caller": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-implied-eval": "error",
    "no-inner-declarations": ["error", "functions"],
    "no-iterator": "error",
    "no-labels": ["error", {"allowLoop": true, "allowSwitch": true}],
    "no-multi-str": "error",
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-proto": "error",
    "no-restricted-syntax": ["error", "WithStatement"],
    "no-sparse-arrays": "error",
    "no-var": "error",
    "no-with": "error",

    // probably bugs (code with no reason to exist, probably typos)
    "array-callback-return": "error",
    "block-scoped-var": "error", // not actually used; precluded by no-var
    "callback-return": [2, ["callback", "cb", "done"]],
    "consistent-this": "off", // we use arrow functions instead
    "constructor-super": "error",
    "default-case": "off", // hopefully TypeScript will let us skip `default` for things that are exhaustive
    "no-case-declarations": "off", // meh, we have no-shadow
    "no-duplicate-case": "error",
    "no-empty": ["error", {"allowEmptyCatch": true}],
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-fallthrough": "error",
    "no-label-var": "error",
    "no-new-require": "error",
    "no-new": "error",
    "no-redeclare": "off", // Useful with type namespaces
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-shadow": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-undef": ["error", {"typeof": true}],
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-unsafe-finally": "error",
    "no-unused-labels": "error",
    "no-use-before-define": ["error", {"functions": false, "classes": false, "variables": false}],
    "use-isnan": "error",
    "valid-typeof": "error",

    // style choices
    "no-constant-condition": ["error", {"checkLoops": false}],
    "no-lonely-if": "off",
    "radix": ["error", "as-needed"],

    // naming style
    "camelcase": "off", // mostly only so we can import `child_process`
    "id-length": "off",
    "id-match": "off",
    "new-cap": ["error", {"newIsCap": true, "capIsNew": false}],
    "no-underscore-dangle": "off",

    // syntax style (local syntactical, usually autofixable formatting decisions)

    "arrow-parens": "off",
    "arrow-body-style": "error",
    "brace-style": ["error", "1tbs", {"allowSingleLine": true}],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore"
    }],
    "comma-style": ["error", "last"],
    "curly": ["error", "multi-line", "consistent"],
    "dot-notation": "off",
    "max-len": ["error", {"code": 100, "ignoreUrls": true}],
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-div-regex": "error",
    "no-duplicate-imports": "error",
    "no-extra-parens": "off",
    "no-floating-decimal": "error",
    "no-mixed-requires": "error",
    "no-multi-spaces": "error",
    "no-new-object": "error",
    "no-octal-escape": "error",
    "no-return-assign": ["error", "except-parens"],
    "no-undef-init": "off",
    "no-unneeded-ternary": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "off",
    "no-useless-rename": "error",
    "object-shorthand": ["error", "methods"],
    "one-var": "off",
    "operator-assignment": "off",
    "prefer-arrow-callback": "off",
    "prefer-const": ["error", {"destructuring": "all"}],
    "quote-props": "off",
    "quotes": "off",
    "semi": ["error", "always"],
    "sort-vars": "off",
    "vars-on-top": "off",
    "wrap-iife": ["error", "inside"],
    "wrap-regex": "off",
    "yoda": ["error", "never", { "exceptRange": true }],

    // whitespace
    "array-bracket-spacing": ["error", "never"],
    "arrow-spacing": ["error", {"before": true, "after": true}],
    "block-spacing": ["error", "always"],
    "comma-spacing": ["error", {"before": false, "after": true}],
    "computed-property-spacing": ["error", "never"],
    "dot-location": ["error", "property"],
    "eol-last": ["error", "always"],
    "func-call-spacing": "error",
    "function-paren-newline": ["error", "consistent"],
    "indent": ["error", 2, {"flatTernaryExpressions": true}],
    "key-spacing": "error",
    "keyword-spacing": ["error", {"before": true, "after": true}],
    "lines-around-comment": "off",
    "no-mixed-spaces-and-tabs": "error",
    "no-multiple-empty-lines": ["error", {"max": 2, "maxEOF": 1}],
    "no-trailing-spaces": ["error", {"ignoreComments": false}],
    "object-curly-spacing": ["error", "never"],
    "operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }],
    "padded-blocks": ["error", "never"],
    "padding-line-between-statements": "off",
    "rest-spread-spacing": ["error", "never"],
    "semi-spacing": ["error", {"before": false, "after": true}],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", {"anonymous": "always", "named": "never"}],
    "spaced-comment": ["error", "always", {"exceptions": ["*"]}],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": ["error", {"words": true, "nonwords": false}],
    "template-curly-spacing": ["error", "never"],
  },
  "overrides": [
    {
      "files": ["**/*.ts", "**/*.tsx"],
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "ecmaVersion": 9,
        "sourceType": "module",
        "tsconfigRootDir": ".",
        "project": ["./tsconfig.json"]
      },
      "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      "plugins": [
        "import"
      ],
      "rules": {
        // TODO revisit
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/member-ordering": "off",
        // "@typescript-eslint/no-extraneous-class": "error",
        // "@typescript-eslint/no-type-alias": "error",

        "@typescript-eslint/no-namespace": "off",
        "new-parens": "off", // used for the `new class {...}` pattern
        "no-prototype-builtins": "off",

        // typescript-eslint defaults too strict
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-use-before-define": "off",
        // disable additional typescript-eslint 3.0 defaults
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-return": "off",

        // probably bugs
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/no-dupe-class-members": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        "@typescript-eslint/return-await": ["error", "in-try-catch"],
        "import/no-extraneous-dependencies": "error",
        "no-dupe-class-members": "off",
        "no-unused-expressions": ["error", {"allowTernary": true}], // ternary is used to convert callbacks to Promises

        // naming style
        "@typescript-eslint/camelcase": "off",

        // syntax style (local syntactical, usually autofixable formatting decisions)
        "@typescript-eslint/adjacent-overload-signatures": "error",
        // "@typescript-eslint/array-type": "error",
        "@typescript-eslint/consistent-type-assertions": ["error", {"assertionStyle": "as"}],
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        "@typescript-eslint/explicit-member-accessibility": ["error", {"accessibility": "no-public"}],
        "@typescript-eslint/member-delimiter-style": "error",
        "@typescript-eslint/no-parameter-properties": "error",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-var-requires": "error",
        "@typescript-eslint/prefer-as-const": "error",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-includes": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "prefer-object-spread": "error",
        "@typescript-eslint/prefer-optional-chain": "error",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/unified-signatures": "error",

        "quotes": "off",
        "@typescript-eslint/quotes": ["error", "single"],
        "semi": "off",
        "@typescript-eslint/semi": ["error", "always"],

        // whitespace
        "@typescript-eslint/type-annotation-spacing": "error",
        "spaced-comment": ["error", "always", {"exceptions": ["*", "/"]}],

        // overriding base
        "indent": "off",
        "@typescript-eslint/indent": ["error", 2, {"flatTernaryExpressions": true}],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error", {"functions": false, "classes": false, "variables": false}],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": ["error"],

        // types
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/prefer-string-starts-ends-with": "off",
        // "@typescript-eslint/switch-exhaustiveness-check": "error",

        // types - probably bugs
        "@typescript-eslint/no-floating-promises": [
          "error", {"ignoreVoid": false, "ignoreIIFE": true}
        ],
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-throw-literal": "error",

        // syntax style (local syntactical, usually autofixable formatting decisions)
        "@typescript-eslint/no-unnecessary-qualifier": "off",
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/prefer-regexp-exec": "error",
      }
    },
    {
      "files": ["**/*.test.ts", "**/*.test.js"],
      "extends": [
        "plugin:jest/recommended",
        "plugin:jest/style",
      ],
      "plugins": [
        "jest"
      ],
      "env": {
        "jest/globals": true
      },
    }
  ]
};

