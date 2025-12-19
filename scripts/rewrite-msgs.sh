#!/bin/bash

# Rewrite specific commit messages
# Change commit de17158 -> "contact added"

git filter-branch -f --msg-filter '
case "$GIT_COMMIT" in
  de17158)
    printf "contact added"
    ;;
  *)
    cat
    ;;
esac
' -- HEAD
