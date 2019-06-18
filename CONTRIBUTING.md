# Contributing

Please fork this repo, and make a pull request to the original repo after changes are made. If you have any questions or concerns, please submit an issue in the original repo.

### Commit message

* One change per commit

  Say you have the following changes:

  * a bug fix
  * a new feature development

  DO commit after each task

  DO NOT bundle multiple changes in one commit

* Commit message convention

  This project follows AngularJS's [commit message convention](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)

  `<type>(<scope>): <subject>`

  `type` must be one of：
    * feat: A new feature
    * fix: A bug fix
    * docs: Documentation only changes
    * style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
    * refactor: A code change that neither fixes a bug nor adds a feature
    * perf: A code change that improves performance
    * test: Adding missing or correcting existing tests
    * chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

  examples:

    * docs(README): add sponsor link

    * style(file.py): fix syntax error

    * fix(api): fix create docker container bug


### Issue

* Provide detailed environment information

* Provide detailed steps to reproduce

* Provide as much information as possible for the error (e.g. error message, stacktrace, etc)


### Pull request

* Keep commit history clean

* Make sure python code passes pycodestyle tests

* Include unit tests

* Explain scope and reason for the change

* All pull requests are required to be reviewed
