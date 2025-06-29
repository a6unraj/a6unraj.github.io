## \*\*Firebase CLI reference: \*\* https://firebase.google.com/docs/cli

List Projects :

```plaintext
>firebase projects:list
```

Change Projects :

```plaintext
>firebase use <proj_name>
```

List Hosting Sites :

```plaintext
>firebase hosting:sites:list
```

Deploy :

```plaintext
>firebase deploy
```

## \*\*Commands for deploying multiple sites linked to a project: \*\* https://firebase.google.com/docs/hosting/multisites

Deploy targets : Set Target name for each of the sites created

```plaintext
>firebase target:apply hosting <target_name> <resource_identifier>
```

in firebase.json, add the below parameter under "hosting" to reference the site that needs to be deployed with the deploy command

```plaintext
"target": "<target_name>"
```
