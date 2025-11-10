# cycode_test_task

## Prerequisites

### What's missing so far

- Feature sliced structure is incomplete
- Virtualization of a users list
- proper eslint configuration (e.g. imports order)

### Deliberate assumptions made

- Naive data loading approach for the sake of simplicity
- Simplified store functionality
- Mostly missing error handling
- No complete full-scale component library
    - e.g. things like typography with `size` options and etc

## How to run

1. Without installation (docker required)
    1. Run `make build`
    2. After the build is complete, execute `make run`
2. Local installation
    1. `pnpm i`
    2. `pnpm dev`
