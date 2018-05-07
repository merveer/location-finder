    module.exports = {
        "env": {
            "browser": true,
            "node": true,
            "es6": true,
            "commonjs": true
        },
        "extends": "eslint:recommended",
        "parserOptions": {
            "ecmaFeatures": {
        "jsx": true
        },
        "sourceType": "module"
    },
        "rules": {
            'no-console': 'off',
            "indent": [
            "error",
            4
        ],
        "linebreak-style": [
        "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
        "error",
        "always"
        ]
    }
};
