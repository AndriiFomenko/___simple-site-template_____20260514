# Git — Conventional Commits v1.0.0

- Never commit automatically. Only commit when explicitly asked.
- All commit messages, PR titles and branch names must be in English. This is absolute and cannot be overridden.
- Follow the exact structure:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

- Type must be lowercase: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
- Description: imperative present tense, lowercase start, no trailing period.
- Breaking changes: use `feat(api)!:` or footer `BREAKING CHANGE: description`
- One logical change per commit (atomic commits).
- Branch names: type/scope-short-description (e.g. feat/user-auth, fix/login-bug)
- PR titles must also follow Conventional Commits format.
