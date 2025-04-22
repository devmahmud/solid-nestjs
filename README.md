# SOLID Principles in NestJS

This repository demonstrates the implementation of SOLID principles in a NestJS application, showing both good and bad practices for each principle.

## What are SOLID Principles?

SOLID is an acronym for five design principles that help make software designs more understandable, flexible, and maintainable:

1. **Single Responsibility Principle (SRP)**
   - A class should have only one reason to change
   - Each module should be responsible for one, and only one, actor

2. **Open/Closed Principle (OCP)**
   - Software entities should be open for extension but closed for modification
   - New functionality should be added by extending existing code rather than modifying it

3. **Liskov Substitution Principle (LSP)**
   - Objects of a superclass should be replaceable with objects of its subclasses without breaking the application
   - Subtypes must be substitutable for their base types

4. **Interface Segregation Principle (ISP)**
   - Clients should not be forced to depend on interfaces they do not use
   - Many client-specific interfaces are better than one general-purpose interface

5. **Dependency Inversion Principle (DIP)**
   - High-level modules should not depend on low-level modules
   - Both should depend on abstractions

## Project Structure

The repository is organized into modules that demonstrate each SOLID principle:

```
src/
├── modules/
│   ├── SRP/      # Single Responsibility Principle
│   ├── OCP/      # Open/Closed Principle
│   ├── LSP/      # Liskov Substitution Principle
│   ├── ISP/      # Interface Segregation Principle
│   └── DIP/      # Dependency Inversion Principle
```

Each principle module contains:
- Good practices implementation
- Bad practices implementation (where applicable)
- Documentation explaining the differences
- Tests demonstrating the benefits of following the principle

## Getting Started

```bash
# Install dependencies
$ pnpm install

# Run the application
$ pnpm run start:dev

# Run tests
$ pnpm run test
```

## Learning Path

1. Start with the SRP module to understand basic class responsibility
2. Move to OCP to learn about extensibility
3. Study LSP to understand inheritance and polymorphism
4. Explore ISP to learn about interface design
5. Finally, understand DIP to master dependency management

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
