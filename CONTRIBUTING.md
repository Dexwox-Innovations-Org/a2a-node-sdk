# Contributing to Dexwox A2A Platform

Thank you for your interest in contributing to the Dexwox A2A Platform! We welcome contributions from everyone.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `pnpm install`
4. Build the packages: `pnpm build`
5. Create a new branch for your changes

## Package Structure

The A2A Platform is organized as a monorepo with the following packages:

- `@dexwox/a2a-node`: Unified package that includes all A2A functionality
- `@dexwox/a2a-core`: Core types and utilities
- `@dexwox/a2a-client`: Client implementation for connecting to A2A servers
- `@dexwox/a2a-server`: Server implementation for hosting A2A agents

When contributing, make sure to update the relevant packages and their documentation.

## Development Workflow

### Code Style
- Follow existing code style and patterns
- Use TypeScript strict mode
- Include unit tests for new features
- Update documentation when making changes
- Run linting before committing: `pnpm lint`
- Format code with Prettier: `pnpm format`

### Commit Messages
- Use conventional commits format
- Keep commits focused and atomic
- Reference issues when applicable

### Testing
- Run tests before submitting: `pnpm test`
- Add tests for new functionality
- Update tests when fixing bugs

## Pull Requests

1. Ensure your branch is up to date with main
2. Open a draft PR early for discussion
3. Include a clear description of changes
4. Reference any related issues
5. Request review when ready

## Issue Reporting

- Check for existing issues before creating new ones
- Include steps to reproduce bugs
- Provide environment details
- For feature requests, explain the use case

## Code of Conduct

All contributors must follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing, you agree that your contributions will be licensed under the project's [Apache 2.0 License](LICENSE).

## Getting Help

For questions and discussions, please email us at [developer@dexwox.com](mailto:developer@dexwox.com).

You can also reach out to the maintainers via GitHub issues or discussions.
