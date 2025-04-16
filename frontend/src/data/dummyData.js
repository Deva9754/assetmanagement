export const users = [
    { id: 1, name: 'Admin', role: 'admin' },
    { id: 2, name: 'User A', role: 'user' },
    { id: 3, name: 'User B', role: 'user' },
    { id: 4, name: 'User C', role: 'user' },
];

export const assetTypes = [
    { id: 1, name: 'Electronic Assets', isActive: true },
    { id: 2, name: 'Furniture Assets', isActive: true },
];

export const assets = [{
        id: 1,
        name: 'Laptop',
        typeId: 1,
        location: 'Office A',
        brand: 'Dell',
        purchaseYear: 2022,
        isActive: true,
        currentOwnerId: 1
    },
    {
        id: 2,
        name: 'Chair',
        typeId: 2,
        location: 'Office B',
        brand: 'IKEA',
        purchaseYear: 2021,
        isActive: true,
        currentOwnerId: 2
    }
];

export const transactions = [{
    id: 1,
    assetId: 1,
    fromUserId: 1,
    toUserId: 2,
    timestamp: "2025-04-09T14:15:00Z",
}];