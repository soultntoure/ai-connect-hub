# Contributing to AI Connect Hub

We welcome contributions to the AI Connect Hub project! Whether it's reporting a bug, suggesting a feature, or submitting a pull request, your help is valuable.

## How to Contribute

### 1. Bug Reports

If you find a bug, please open an issue on our GitHub repository. When reporting, please:

*   Provide a clear and concise description of the bug.
*   Include steps to reproduce the issue.
*   Specify your operating system, browser, Node.js version, etc.
*   Provide any relevant error messages or screenshots.

### 2. Feature Requests

Have an idea for a new feature? We'd love to hear it!

*   Open an issue to describe your idea.
*   Explain the problem it solves or the benefit it provides.
*   (Optional) Suggest how it might be implemented or integrated.

### 3. Code Contributions (Pull Requests)

We appreciate code contributions that improve the platform.

#### Getting Started

1.  **Fork the repository:** Start by forking the `ai-connect-hub` repository to your GitHub account.
2.  **Clone your fork:** `git clone https://github.com/YOUR_USERNAME/ai-connect-hub.git`
3.  **Install dependencies:** Navigate to the project root and run `pnpm install`.
4.  **Set up your environment:** Follow the [Setup Instructions](README.md#setup-instructions) in the `README.md` to get the project running locally.
5.  **Create a new branch:** Choose a descriptive name for your branch (e.g., `feature/add-dark-mode`, `bugfix/login-error`). `git checkout -b your-feature-branch`

#### Making Changes

*   **Write clean code:** Adhere to existing coding styles and best practices. Use TypeScript effectively.
*   **Test your changes:** Ensure existing tests pass and add new tests for your features/bug fixes where appropriate (`pnpm --recursive test`).
*   **Lint your code:** Run `pnpm lint` and fix any issues.
*   **Update documentation:** If your changes affect the functionality or setup, update the relevant documentation (e.g., `README.md`, comments).

#### Submitting a Pull Request

1.  **Commit your changes:** Write clear, concise commit messages.
    *   `git commit -m "feat: Add user profile page"`
    *   `git commit -m "fix: Resolve login redirect bug"`
2.  **Push to your fork:** `git push origin your-feature-branch`
3.  **Open a Pull Request:** Go to the original `ai-connect-hub` repository on GitHub and open a new pull request from your branch. Please provide:
    *   A clear title.
    *   A detailed description of your changes.
    *   Any relevant issue numbers (e.g., `Closes #123`).

## Code of Conduct

We expect all contributors to adhere to our Code of Conduct (coming soon). In the meantime, please be respectful and constructive in all interactions.

Thank you for your contributions!