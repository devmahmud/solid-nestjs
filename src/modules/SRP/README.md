# Single Responsibility Principle (SRP)

This module demonstrates the Single Responsibility Principle, which states that a class should have only one reason to change, meaning it should have only one job or responsibility.

## Good Example

The `ProductsService` class demonstrates good SRP implementation by:
- Focusing solely on product-related operations
- Having a single responsibility: managing products in the database
- Being easily testable and maintainable
- Having clear, focused methods

```typescript
@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.product.findMany();
  }

  async findOne(productId: number) {
    return this.prisma.product.findUnique({
      where: { productId },
    });
  }

  // ... other product-specific methods
}
```

## Bad Example

The `BadProductsService` class violates SRP by:
- Mixing multiple responsibilities in one class
- Handling product management, order creation, email notifications, and analytics
- Being harder to test and maintain
- Having multiple reasons to change

```typescript
@Injectable()
export class BadProductsService {
  // Product management methods
  async findAll() { ... }
  
  // Order management (violating SRP)
  async createOrder() { ... }
  
  // Email notification (violating SRP)
  async sendProductNotification() { ... }
  
  // Analytics (violating SRP)
  async getProductAnalytics() { ... }
}
```

## Why SRP Matters

1. **Maintainability**: Classes with single responsibilities are easier to maintain and modify
2. **Testability**: Single-responsibility classes are easier to test
3. **Reusability**: Focused classes are more likely to be reusable
4. **Readability**: Code is easier to understand when classes have clear, single purposes
5. **Collaboration**: Different team members can work on different classes without conflicts

## How to Apply SRP

1. Identify the different responsibilities in your code
2. Separate concerns into different classes
3. Use dependency injection to manage dependencies
4. Keep classes focused and cohesive
5. Regularly refactor code to maintain single responsibilities

## Best Practices

1. Each class should have only one reason to change
2. Group related functionality together
3. Use interfaces to define clear boundaries
4. Keep methods small and focused
5. Use dependency injection for better testability and maintainability 