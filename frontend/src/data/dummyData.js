export const users = [
    { id: 1, name: 'Admin', role: 'admin' },
    { id: 2, name: 'User A', role: 'user' },
    { id: 3, name: 'User B', role: 'user' },
    { id: 4, name: 'User C', role: 'user' },
    { id: 5, name: 'User D', role: 'user' },
    { id: 6, name: 'User E', role: 'user' },
    { id: 7, name: 'User F', role: 'user' },
    { id: 8, name: 'User G', role: 'user' },
    { id: 9, name: 'User H', role: 'user' },
    { id: 10, name: 'User I', role: 'user' },
];

export const assetTypes = [
    { id: 1, name: 'Electronic Assets', isActive: true },
    { id: 2, name: 'Furniture Assets', isActive: true },
    { id: 3, name: 'Stationery', isActive: true },
    { id: 4, name: 'Vehicles', isActive: true },
    { id: 5, name: 'Software Licenses', isActive: true },
    { id: 6, name: 'Networking Equipment', isActive: true },
    { id: 7, name: 'Storage Devices', isActive: true },
    { id: 8, name: 'Home Appliances', isActive: true },
    { id: 9, name: 'Mobile Devices', isActive: false },
    { id: 10, name: 'Industrial Tools', isActive: true },
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
    },
    {
        id: 3,
        name: 'Printer',
        typeId: 1,
        location: 'Office C',
        brand: 'HP',
        purchaseYear: 2020,
        isActive: true,
        currentOwnerId: 3
    },
    {
        id: 4,
        name: 'Desk',
        typeId: 2,
        location: 'Office A',
        brand: 'Urban Ladder',
        purchaseYear: 2019,
        isActive: true,
        currentOwnerId: 4
    },
    {
        id: 5,
        name: 'Monitor',
        typeId: 1,
        location: 'Office D',
        brand: 'LG',
        purchaseYear: 2022,
        isActive: true,
        currentOwnerId: 5
    },
    {
        id: 6,
        name: 'Whiteboard',
        typeId: 3,
        location: 'Office E',
        brand: 'Markerz',
        purchaseYear: 2018,
        isActive: true,
        currentOwnerId: 6
    },
    {
        id: 7,
        name: 'Router',
        typeId: 6,
        location: 'Server Room',
        brand: 'TP-Link',
        purchaseYear: 2021,
        isActive: true,
        currentOwnerId: 7
    },
    {
        id: 8,
        name: 'Projector',
        typeId: 1,
        location: 'Conference Room',
        brand: 'BenQ',
        purchaseYear: 2020,
        isActive: true,
        currentOwnerId: 8
    },
    {
        id: 9,
        name: 'Tablet',
        typeId: 9,
        location: 'Office F',
        brand: 'Samsung',
        purchaseYear: 2023,
        isActive: true,
        currentOwnerId: 9
    },
    {
        id: 10,
        name: 'Drill Machine',
        typeId: 10,
        location: 'Workshop',
        brand: 'Bosch',
        purchaseYear: 2019,
        isActive: true,
        currentOwnerId: 10
    }
];

export const transactions = [{
        id: 1,
        assetId: 1,
        fromUserId: 1,
        toUserId: 2,
        timestamp: "2025-04-09T14:15:00Z",
    },
    {
        id: 2,
        assetId: 2,
        fromUserId: 2,
        toUserId: 3,
        timestamp: "2025-04-10T10:00:00Z",
    },
    {
        id: 3,
        assetId: 3,
        fromUserId: 3,
        toUserId: 4,
        timestamp: "2025-04-10T11:30:00Z",
    },
    {
        id: 4,
        assetId: 4,
        fromUserId: 4,
        toUserId: 5,
        timestamp: "2025-04-10T13:45:00Z",
    },
    {
        id: 5,
        assetId: 5,
        fromUserId: 5,
        toUserId: 6,
        timestamp: "2025-04-10T15:15:00Z",
    },
    {
        id: 6,
        assetId: 6,
        fromUserId: 6,
        toUserId: 7,
        timestamp: "2025-04-10T16:30:00Z",
    },
    {
        id: 7,
        assetId: 7,
        fromUserId: 7,
        toUserId: 8,
        timestamp: "2025-04-10T17:45:00Z",
    },
    {
        id: 8,
        assetId: 8,
        fromUserId: 8,
        toUserId: 9,
        timestamp: "2025-04-10T19:00:00Z",
    },
    {
        id: 9,
        assetId: 9,
        fromUserId: 9,
        toUserId: 10,
        timestamp: "2025-04-10T20:15:00Z",
    },
    {
        id: 10,
        assetId: 10,
        fromUserId: 10,
        toUserId: 1,
        timestamp: "2025-04-10T21:30:00Z",
    }
];