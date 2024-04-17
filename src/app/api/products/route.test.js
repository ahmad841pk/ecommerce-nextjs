

data = [
    {
        "id": 2,
        "name": "oglasnik",
        "price": "20",
        "image": "oglasnik-logo.png",
        "categoryId": 1
    },
    {
        "id": 3,
        "name": "cricket bat",
        "price": "24",
        "image": "criecktBat.jpg",
        "categoryId": 1
    },
    {
        "id": 4,
        "name": "tennis ball",
        "price": "30",
        "image": "tennisBalljpg.jpg",
        "categoryId": 1
    },
    {
        "id": 5,
        "name": "football",
        "price": "50",
        "image": "footballjpg.jpg",
        "categoryId": 1
    },
    {
        "id": 6,
        "name": "laptop",
        "price": "40",
        "image": "laptopjpg.jpg",
        "categoryId": 5
    },
    {
        "id": 7,
        "name": "Mobile",
        "price": "74",
        "image": "mobile.jpg",
        "categoryId": 5
    },
    {
        "id": 8,
        "name": "headphone",
        "price": "10",
        "image": "headphonejpg.jpg",
        "categoryId": 5
    },
    {
        "id": 9,
        "name": "Red Tee",
        "price": "35",
        "image": "redTee.jpg",
        "categoryId": 4
    },
    {
        "id": 10,
        "name": "white tee",
        "price": "80",
        "image": "whiteTeejpg.jpg",
        "categoryId": 4
    }
]

test("should fetch products", async () => {
    // Mock API response
    const mockData = { id: 1, name: "John Doe" };
    axios.get.mockResolvedValue({ data: mockData });
    // Make API request
    const response = await fetchUserData();
    // Use Jest matchers to assert the response
    expect(response).toEqual(mockData);
   });