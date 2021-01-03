---
title: How to write a good commit message
date: 2020-07-30
---

<p>
A commit message is a short description of the changes you've made to a file added before committing the changes.

<p>&nbsp;</p>

Good commit messages are important not only for others who you may be collaborating on the project but also for you, to keep track of all your commits and knowing exactly what changes where maybe during that particular commit. Even if you're working on a personal project, I'd recommend that you start getting in the habit of writing good commit messages.

</p>
<p>&nbsp;</p>
This is the format that I use most of the time (this may change depending on your preference or organization your working for):

<p>&nbsp;</p>

<pre>
type: subject

body (optional)

footer (optional)
</pre>

<ol class="list-decimal mt-5 list-inside">

<li class="text-xl mb-5">Type</li>

- **feat** - a new feature
- **fix** - a bug fix
- **docs** - changes in documentation
- **style** - everything related to styling
- **refactor** - code changes that neither fixes a bug or adds a feature
- **test** - everything related to testing
- **chore** - updating build tasks, package manager configs, etc

<li class="text-xl mb-5 mt-5">Subject</li>

This contains a short description of the changes made. It shouldn't be greater than 50 characters, should begin with a capital letter and written in the imperative eg. Add instead of Added or Adds.

<li class="text-xl mb-5 mt-5">Body</li>

The body is used to explain what changes you made and why you made them. Not all commits are complex enough that they need a body, especially if you are working on a personal project alone, and as such writing a body is optional.

A blank line between the body and the subject is required and each line should have no more than 72 characters.

<li class="text-xl mb-5 mt-5">Footer</li>

The footer is also optional and mainly used when you are using an issue tracker to reference the issue ID.

</ol>

<p>&nbsp;</p>

Example of a good commit message:

<blockquote>docs: Fix typo in README.md</blockquote>
