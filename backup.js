// product
let products = [
    {
        "id": "d1cec4de-cec6-4e51-8e91-2af6ce350991",
        "name": "danh mục 1",
        "price": "200",
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        "description": "danh mục 1",
        "type": "new_arrival",
        "category_id": "840a38fc-4530-4c9e-8bed-d3f5e06d78ca"
    },
    {
        "id": "29bb27a1-51cd-42be-8361-72009770f372",
        "name": "danh mục 2",
        "price": "300",
        "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=812&q=80",
        "description": "mô tả 2",
        "type": "new_arrival",
        "category_id": "73afbeb2-fcb2-4210-ae8b-d92ac8260302"
    },
    {
        "id": "059dab65-891b-40aa-8e4f-525059dce395",
        "name": "danh mục 1.1",
        "price": "200",
        "image": "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80",
        "description": "mô tả 1.1",
        "type": "new_arrival",
        "category_id": "840a38fc-4530-4c9e-8bed-d3f5e06d78ca"
    },
    {
        "id": "a0913b2e-e39c-4e59-9a5e-1494441b58d0",
        "name": "danh mục 2.1",
        "price": "300",
        "image": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80",
        "description": "anh 2.1",
        "type": "new_arrival",
        "category_id": "73afbeb2-fcb2-4210-ae8b-d92ac8260302"
    },
    {
        "id": "13846aa9-4a22-46b4-88c3-c31ea0674076",
        "name": "sản phẩm 2.3",
        "price": "200",
        "image": "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80",
        "description": "anh 2.3",
        "type": "new_arrival",
        "category_id": "73afbeb2-fcb2-4210-ae8b-d92ac8260302"
    }
];

// category
let categories = [
    {
        "id": "840a38fc-4530-4c9e-8bed-d3f5e06d78ca",
        "name": "danh mục 1"
    },
    {
        "id": "73afbeb2-fcb2-4210-ae8b-d92ac8260302",
        "name": "danh mục 2"
    }
]


// users
let users = [
    {
        "id": "4fd6d14d-e40a-4a9e-b81d-614d5a3bde8c",
        "name": "ducdo",
        "password": "a@A123456",
        "email": "vietduc122@gmail.com",
        "status": "active",
        cart: [
            {id: 1, name: 'giay', quantity: 1},
            {id: 2, name: 'ao', quantity: 2}
        ]
    }
]

let users = [


    {
        "id": "760a12a8-a370-4bda-b6e6-3d0837d6b8f0",
        "name": "ducdo",
        "email": "vietduc122@gmail.com",
        "password": "a@A123456",
        "status": "active",
    },

    {
        "id": "966a4be2-d0fe-42f6-afec-532741578d0e",
        "name": "ducdo2",
        "email": "tvietduc122@gmail.com",
        "password": "a@A123456",
        "status": ""
    }
]

// 1. build ra value của cart
[
    // 1 sản phảm
    {id: 1, name: 'giay the thao', quantity: 2},
    {id: 2, name: 'quan ao', quantity: 1}
]

// 2. update user đang login hay có status là active
// Thêm thuộc tính cart cho user đang active


// 3. cập nhật lại localStorage cho users



{/* <tr data-product_id="d1cec4de-cec6-4e51-8e91-2af6ce350991">              
    <td class="product-quantity" data-title="Quantity"><div class="quantity">
</tr>     */}

<tr data-product_id="059dab65-891b-40aa-8e4f-525059dce395"></tr>
<input type="text" name="quantity" value="1" title="Qty" class="qty" size="4"> 
</tr>   

<tr data-product_id="29bb27a1-51cd-42be-8361-72009770f372">
<input type="text" name="quantity" value="2" title="Qty" class="qty" size="4">
</tr>


cart = [
    {id: 'd1cec4de-cec6-4e51-8e91-2af6ce350991', name: 'danh mục 1', quantuty: '200', image: 'https://images.unsplash.com/photo-1542291026-7eec2…ufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', description: 'danh mục 1', …}

    {id: '059dab65-891b-40aa-8e4f-525059dce395', name: 'danh mục 1.1', price: '200', image: 'https://images.unsplash.com/photo-1543508282-6319a…ufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=415&q=80', description: 'mô tả 1.1', …}

    {id: '29bb27a1-51cd-42be-8361-72009770f372', name: 'danh mục 2', price: '300', image: 'https://images.unsplash.com/photo-1549298916-b41d5…ufDB8fHx8fA%3D%3D&auto=format
]



[{id: "57405cd5-61ac-4f65-b1e1-e9e95839dbf1", name: "GOLD JEWELRY"},…]
0
: 
{id: "57405cd5-61ac-4f65-b1e1-e9e95839dbf1", name: "GOLD JEWELRY"}
1
: 
{id: "8f5a1945-86c4-4126-bba3-af9cfe2e1733", name: "Silver JEWELRY"}
2
: 
{id: "b57ad855-e474-43e1-8c2d-29c20eb26fad", name: "Diamond JEWELRY"}





[
    {
        "id": "7aef640f-ba16-4a40-b10a-a2d4363fa82a",
        "name": "ring gold A",
        "price": "1000",
        "image": "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80",
        "description": "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1748&q=80",
        "type": "new_arrival",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "e0c36eb0-24e0-4ac8-a541-c4972b57f0af",
        "name": "ring Diamond A",
        "price": "2000",
        "image": "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
        "description": "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80",
        "type": "new_arrival",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "8ae38352-3aa4-43f6-af8d-130e05be1c60",
        "name": "ring Silver A",
        "price": "500",
        "image": "https://images.unsplash.com/photo-1562249004-1f7289c19c49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        "description": "https://images.unsplash.com/photo-1562249004-1f7289c19c49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        "type": "new_arrival",
        "category_id": "8f5a1945-86c4-4126-bba3-af9cfe2e1733"
    },
    {
        "id": "a52a5ba1-831d-4544-a659-fbe4a34a6462",
        "name": "ring Silver B",
        "price": "1000",
        "image": "https://images.unsplash.com/photo-1565206077212-4eb48d41f54b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        "description": "https://images.unsplash.com/photo-1565206077212-4eb48d41f54b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        "type": "best_seller",
        "category_id": "8f5a1945-86c4-4126-bba3-af9cfe2e1733"
    },
    {
        "id": "612e02a6-4f9d-4d2f-9731-ffb2b8cfa6d5",
        "name": "ring hot A",
        "price": "4000",
        "image": "https://images.unsplash.com/photo-1584568499702-823d980e875f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        "description": "https://images.unsplash.com/photo-1584568499702-823d980e875f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        "type": "feature",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "2b7d9a7c-5012-4c8b-8658-bb0681894f51",
        "name": "ring Diamond B",
        "price": "3000",
        "image": "https://images.unsplash.com/photo-1499899833954-5ecd9439d17f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        "description": "https://images.unsplash.com/photo-1499899833954-5ecd9439d17f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        "type": "new_arrival",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "3127064a-feec-4e48-ab45-a34e8429a7e0",
        "name": "ring Diamond c",
        "price": "3000",
        "image": "https://images.unsplash.com/photo-1588445046108-14dced0c98fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        "description": "https://images.unsplash.com/photo-1588445046108-14dced0c98fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        "type": "best_seller",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "21a18fd6-b61e-49c3-95ea-c11ab756b981",
        "name": "ring gold B",
        "price": "1000",
        "image": "https://images.unsplash.com/photo-1565619601015-e57cced38f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1782&q=80",
        "description": "https://images.unsplash.com/photo-1565619601015-e57cced38f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1782&q=80",
        "type": "feature",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "f26428b7-2303-47f6-a86f-57a7ddb2120e",
        "name": "ring gold C",
        "price": "1500",
        "image": "https://images.unsplash.com/photo-1567523977592-7959bc5df51e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1604&q=80",
        "description": "https://images.unsplash.com/photo-1567523977592-7959bc5df51e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1604&q=80",
        "type": "feature",
        "category_id": ""
    },
    {
        "id": "8c95559e-ee8f-4739-8f43-884a3c6bd8e3",
        "name": "ring gold D",
        "price": "1500",
        "image": "https://images.unsplash.com/photo-1684616290729-347a70d05d26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        "description": "https://images.unsplash.com/photo-1684616290729-347a70d05d26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        "type": "feature",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "7bb7987c-5b1a-4464-9cd7-3c6622c44263",
        "name": "ring gold F",
        "price": "1500",
        "image": "https://images.unsplash.com/photo-1628926379972-9843ad139a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        "description": "https://images.unsplash.com/photo-1628926379972-9843ad139a8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        "type": "new_arrival",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "7014d124-d353-40e1-b183-1df13a7ee2e0",
        "name": "ring gold S",
        "price": "1500",
        "image": "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        "description": "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
        "type": "new_arrival",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "89b3a0dc-1dae-47e8-bc6b-049ed45ffffe",
        "name": "ring gold D",
        "price": "1500",
        "image": "https://images.unsplash.com/photo-1589512574123-2ba3b33bf066?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        "description": "https://images.unsplash.com/photo-1589512574123-2ba3b33bf066?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
        "type": "best_seller",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "948787fb-789c-4467-9491-3d0c929495bc",
        "name": "ring gold SS",
        "price": "2000",
        "image": "https://media.istockphoto.com/id/183423646/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-chi%E1%BA%BFc-nh%E1%BA%ABn-v%C3%A0ng-%C4%91%C6%A1n-v%E1%BB%9Bi-kim-c%C6%B0%C6%A1ng-ch%E1%BB%91ng-l%E1%BA%A1i-m%C3%A0u-x%C3%A1m-r%E1%BA%AFn.jpg?s=612x612&w=0&k=20&c=U1DyFMardo6oA8WrsIIxRjsInx7TCQ-jEs0-DAJlsA4=",
        "description": "https://media.istockphoto.com/id/183423646/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-chi%E1%BA%BFc-nh%E1%BA%ABn-v%C3%A0ng-%C4%91%C6%A1n-v%E1%BB%9Bi-kim-c%C6%B0%C6%A1ng-ch%E1%BB%91ng-l%E1%BA%A1i-m%C3%A0u-x%C3%A1m-r%E1%BA%AFn.jpg?s=612x612&w=0&k=20&c=U1DyFMardo6oA8WrsIIxRjsInx7TCQ-jEs0-DAJlsA4=",
        "type": "feature",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "3d994b83-4ace-485b-93a1-63dc10979384",
        "name": "ring gold H",
        "price": "1500",
        "image": "https://media.istockphoto.com/id/525320873/vi/anh/nh%E1%BA%ABn-kim-c%C6%B0%C6%A1ng.jpg?s=612x612&w=0&k=20&c=oflDOYCyj82Eeiioss_CBZXr35ud9SpqQ1AtFWrCvAg=",
        "description": "https://media.istockphoto.com/id/525320873/vi/anh/nh%E1%BA%ABn-kim-c%C6%B0%C6%A1ng.jpg?s=612x612&w=0&k=20&c=oflDOYCyj82Eeiioss_CBZXr35ud9SpqQ1AtFWrCvAg=",
        "type": "special_offer",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "d3999071-8b6d-40ae-8bbd-43b2ed07dea4",
        "name": "ring Silver c",
        "price": "700",
        "image": "https://media.istockphoto.com/id/1385921358/vi/anh/chi%E1%BA%BFc-nh%E1%BA%ABn-kim-c%C6%B0%C6%A1ng-c%C6%B0%E1%BB%9Bi-%C4%91%C6%B0%E1%BB%A3c-%C4%91%E1%BA%B7t-tr%C3%AAn-m%E1%BB%99t-mi%E1%BA%BFng-v%E1%BA%A3i-v%C3%A0ng-h%E1%BB%93ng.jpg?s=612x612&w=0&k=20&c=QwyJyjnomye14uYY-ts0se6_8zOpf9EVGxXHN63z2w4=",
        "description": "https://media.istockphoto.com/id/1385921358/vi/anh/chi%E1%BA%BFc-nh%E1%BA%ABn-kim-c%C6%B0%C6%A1ng-c%C6%B0%E1%BB%9Bi-%C4%91%C6%B0%E1%BB%A3c-%C4%91%E1%BA%B7t-tr%C3%AAn-m%E1%BB%99t-mi%E1%BA%BFng-v%E1%BA%A3i-v%C3%A0ng-h%E1%BB%93ng.jpg?s=612x612&w=0&k=20&c=QwyJyjnomye14uYY-ts0se6_8zOpf9EVGxXHN63z2w4=",
        "type": "best_seller",
        "category_id": "8f5a1945-86c4-4126-bba3-af9cfe2e1733"
    },
    {
        "id": "491d3a41-fa05-4291-9835-a9daf215b9aa",
        "name": "ring Silver D",
        "price": "1000",
        "image": "https://media.istockphoto.com/id/157185375/vi/anh/ba-vi%C3%AAn-kim-c%C6%B0%C6%A1ng-%C4%91%C6%B0%E1%BB%A3c-%C4%91%E1%BA%B7t-trong-m%E1%BB%99t-chi%E1%BA%BFc-nh%E1%BA%ABn-v%C3%A0ng-tr%E1%BA%AFng-%C4%91%C6%B0%E1%BB%A3c-c%C3%A1ch-ly-tr%C3%AAn-m%C3%A0u-tr%E1%BA%AFng.jpg?s=612x612&w=0&k=20&c=HJdwVtbVqVj5z1z15CX9xzjbljV77HnQFJ1Wfo_5hI8=",
        "description": "https://media.istockphoto.com/id/157185375/vi/anh/ba-vi%C3%AAn-kim-c%C6%B0%C6%A1ng-%C4%91%C6%B0%E1%BB%A3c-%C4%91%E1%BA%B7t-trong-m%E1%BB%99t-chi%E1%BA%BFc-nh%E1%BA%ABn-v%C3%A0ng-tr%E1%BA%AFng-%C4%91%C6%B0%E1%BB%A3c-c%C3%A1ch-ly-tr%C3%AAn-m%C3%A0u-tr%E1%BA%AFng.jpg?s=612x612&w=0&k=20&c=HJdwVtbVqVj5z1z15CX9xzjbljV77HnQFJ1Wfo_5hI8=",
        "type": "feature",
        "category_id": "8f5a1945-86c4-4126-bba3-af9cfe2e1733"
    },
    {
        "id": "14506ff4-5aa7-4ddf-bbb2-cf7590fdc32c",
        "name": "ring Diamond D",
        "price": "3000",
        "image": "https://media.istockphoto.com/id/1410329790/vi/anh/kim-c%C6%B0%C6%A1ng.jpg?s=612x612&w=0&k=20&c=3NeaE3szoVdyJAUF54PMFUunfs1hD3RvhuIy_gumW9s=",
        "description": "https://media.istockphoto.com/id/1410329790/vi/anh/kim-c%C6%B0%C6%A1ng.jpg?s=612x612&w=0&k=20&c=3NeaE3szoVdyJAUF54PMFUunfs1hD3RvhuIy_gumW9s=",
        "type": "new_arrival",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "f3139819-5f3a-4daf-a8c2-0b54dc65924d",
        "name": "ring Diamond Q",
        "price": "4000",
        "image": "https://media.istockphoto.com/id/488501293/vi/anh/%C4%91%E1%BA%B9p-kim-c%C6%B0%C6%A1ng-%C4%91%C3%A1m-c%C6%B0%E1%BB%9Bi-engagment-ban-nh%E1%BA%A1c-nh%E1%BA%ABn-solitaire-v%E1%BB%9Bi-mul.jpg?s=612x612&w=0&k=20&c=rRyeQTxEoZgG99ilu14bHeaPNXMCf4AxeGamuxw7qw4=",
        "description": "https://media.istockphoto.com/id/488501293/vi/anh/%C4%91%E1%BA%B9p-kim-c%C6%B0%C6%A1ng-%C4%91%C3%A1m-c%C6%B0%E1%BB%9Bi-engagment-ban-nh%E1%BA%A1c-nh%E1%BA%ABn-solitaire-v%E1%BB%9Bi-mul.jpg?s=612x612&w=0&k=20&c=rRyeQTxEoZgG99ilu14bHeaPNXMCf4AxeGamuxw7qw4=",
        "type": "new_arrival",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "dbde0cae-9d49-4c47-b435-0fffe17b72a8",
        "name": "ring Diamond W",
        "price": "4500",
        "image": "https://media.istockphoto.com/id/815613222/vi/anh/nh%E1%BA%ABn-v%C3%A0ng.jpg?s=612x612&w=0&k=20&c=TwcHfyYsmo7obL1VIZ2_xj_xu6jfdNda8Lo-RYm_q7U=",
        "description": "https://media.istockphoto.com/id/815613222/vi/anh/nh%E1%BA%ABn-v%C3%A0ng.jpg?s=612x612&w=0&k=20&c=TwcHfyYsmo7obL1VIZ2_xj_xu6jfdNda8Lo-RYm_q7U=",
        "type": "best_seller",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "d59ccdac-c934-4001-8b0d-bdcda93b849a",
        "name": "ring Diamond S",
        "price": "4000",
        "image": "https://media.istockphoto.com/id/1370887682/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-trang-s%E1%BB%A9c-nh%E1%BA%ABn-kim-c%C6%B0%C6%A1ng-thanh-l%E1%BB%8Bch-%C4%91%C6%B0%E1%BB%A3c-%C4%91%E1%BA%B7t-trong-n%E1%BB%81n-tr%E1%BA%AFng.jpg?s=612x612&w=0&k=20&c=zYPk1d7_ShJyf9pMj5px4CBWIVWWLn1Gw3twgXVqlys=",
        "description": "https://media.istockphoto.com/id/1370887682/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-trang-s%E1%BB%A9c-nh%E1%BA%ABn-kim-c%C6%B0%C6%A1ng-thanh-l%E1%BB%8Bch-%C4%91%C6%B0%E1%BB%A3c-%C4%91%E1%BA%B7t-trong-n%E1%BB%81n-tr%E1%BA%AFng.jpg?s=612x612&w=0&k=20&c=zYPk1d7_ShJyf9pMj5px4CBWIVWWLn1Gw3twgXVqlys=",
        "type": "feature",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "e8119fe2-80e8-444c-a498-9478752fcabd",
        "name": "ring Diamond E",
        "price": "4000",
        "image": "https://media.istockphoto.com/id/902831246/vi/anh/nh%E1%BA%ABn-kim-c%C6%B0%C6%A1ng-c%C6%B0%E1%BB%9Bi.jpg?s=612x612&w=0&k=20&c=GLtYhvYXrfqKNhdgpehegUqMuJ_Cdi-c-ey9IBoD_HY=",
        "description": "https://media.istockphoto.com/id/902831246/vi/anh/nh%E1%BA%ABn-kim-c%C6%B0%C6%A1ng-c%C6%B0%E1%BB%9Bi.jpg?s=612x612&w=0&k=20&c=GLtYhvYXrfqKNhdgpehegUqMuJ_Cdi-c-ey9IBoD_HY=",
        "type": "best_seller",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "c7683a40-8dd3-4ab0-bba1-86c2c5f8afec",
        "name": "ring Diamond K",
        "price": "4000",
        "image": "https://media.istockphoto.com/id/680051068/vi/anh/nh%E1%BA%ABn-c%C6%B0%E1%BB%9Bi.jpg?s=612x612&w=0&k=20&c=K18oBkTnniUkbDBxoFbZwnfHP8zpstEFCP7RSQe3Mgk=",
        "description": "https://media.istockphoto.com/id/680051068/vi/anh/nh%E1%BA%ABn-c%C6%B0%E1%BB%9Bi.jpg?s=612x612&w=0&k=20&c=K18oBkTnniUkbDBxoFbZwnfHP8zpstEFCP7RSQe3Mgk=",
        "type": "feature",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "7e88fbb6-08ca-482a-b857-75860f43ee54",
        "name": "ring Diamond Y",
        "price": "4000",
        "image": "https://media.istockphoto.com/id/1495287312/vi/anh/v%C3%B2ng-%C4%91eo-tay-kim-c%C6%B0%C6%A1ng-v%C3%A0-nh%E1%BA%ABn-b%E1%BB%8B-c%C3%B4-l%E1%BA%ADp-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng.jpg?s=612x612&w=0&k=20&c=OTlvhrlPkl5kiM3AzVScoiidT0svZEXCRl-wjZ0v-wQ=",
        "description": "https://media.istockphoto.com/id/1495287312/vi/anh/v%C3%B2ng-%C4%91eo-tay-kim-c%C6%B0%C6%A1ng-v%C3%A0-nh%E1%BA%ABn-b%E1%BB%8B-c%C3%B4-l%E1%BA%ADp-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng.jpg?s=612x612&w=0&k=20&c=OTlvhrlPkl5kiM3AzVScoiidT0svZEXCRl-wjZ0v-wQ=",
        "type": "special_offer",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "71d3c066-3115-48ff-b6c2-6228aa82c143",
        "name": "Earrings Gold A",
        "price": "3000",
        "image": "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycmluZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "description": "https://images.unsplash.com/photo-1629224316810-9d8805b95e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFycmluZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "type": "new_arrival",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "e44fa0d8-2412-4a86-b9bf-97b13f7d72bd",
        "name": "Earrings Gold B",
        "price": "3000",
        "image": "https://images.unsplash.com/photo-1561172478-a203d9c8290e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGVhcnJpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "description": "https://images.unsplash.com/photo-1561172478-a203d9c8290e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGVhcnJpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "type": "new_arrival",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "711895b7-d0df-4c30-8549-2025927f7e30",
        "name": "Earrings Gold C",
        "price": "3000",
        "image": "https://plus.unsplash.com/premium_photo-1679750867743-c9436308ac92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGVhcnJpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "description": "https://plus.unsplash.com/premium_photo-1679750867743-c9436308ac92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGVhcnJpbmdzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "type": "new_arrival",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "f75966f6-8836-47eb-bb3b-912621992c5f",
        "name": "Earrings Gold D",
        "price": "4000",
        "image": "https://media.istockphoto.com/id/1366536333/vi/anh/b%C3%B4ng-tai-v%C3%A0ng-v%E1%BB%9Bi-tinh-th%E1%BB%83.jpg?s=612x612&w=0&k=20&c=RGR8mZY3upQKRWjhVbdlCqiBAxGuCh6T-uyRlFFRftU=",
        "description": "https://media.istockphoto.com/id/1366536333/vi/anh/b%C3%B4ng-tai-v%C3%A0ng-v%E1%BB%9Bi-tinh-th%E1%BB%83.jpg?s=612x612&w=0&k=20&c=RGR8mZY3upQKRWjhVbdlCqiBAxGuCh6T-uyRlFFRftU=",
        "type": "new_arrival",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "6975812f-ce9b-4072-be6c-226ed9f86a3a",
        "name": "Earrings Gold Q",
        "price": "3000",
        "image": "https://media.istockphoto.com/id/1194890612/vi/anh/b%C3%B4ng-tai-trang-s%E1%BB%A9c-v%C3%A0ng.jpg?s=612x612&w=0&k=20&c=4tm_8Q7F8efUYYEokWYp1dLORkm6CP3SqNo1o_W5J8M=",
        "description": "https://media.istockphoto.com/id/1194890612/vi/anh/b%C3%B4ng-tai-trang-s%E1%BB%A9c-v%C3%A0ng.jpg?s=612x612&w=0&k=20&c=4tm_8Q7F8efUYYEokWYp1dLORkm6CP3SqNo1o_W5J8M=",
        "type": "best_seller",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "cd66cca7-eb90-4dfa-81c5-7e96c72f9468",
        "name": "Earrings Diamond A",
        "price": "4500",
        "image": "https://media.istockphoto.com/id/1455004865/vi/anh/b%E1%BB%99-trang-s%E1%BB%A9c-thanh-l%E1%BB%8Bch-trang-s%E1%BB%A9c-%C4%91%C6%B0%E1%BB%A3c-%C4%91%E1%BA%B7t-b%E1%BA%B1ng-%C4%91%C3%A1-qu%C3%BD-ph%E1%BB%A5-ki%E1%BB%87n-trang-s%E1%BB%A9c-c%E1%BA%AFt-d%C3%A1n-s%E1%BA%A3n-ph%E1%BA%A9m-t%C4%A9nh.jpg?s=612x612&w=0&k=20&c=M3-YoePcfX_NAgMIGCH0wA3RhxirAjm9Rc75wolDtYE=",
        "description": "https://media.istockphoto.com/id/1455004865/vi/anh/b%E1%BB%99-trang-s%E1%BB%A9c-thanh-l%E1%BB%8Bch-trang-s%E1%BB%A9c-%C4%91%C6%B0%E1%BB%A3c-%C4%91%E1%BA%B7t-b%E1%BA%B1ng-%C4%91%C3%A1-qu%C3%BD-ph%E1%BB%A5-ki%E1%BB%87n-trang-s%E1%BB%A9c-c%E1%BA%AFt-d%C3%A1n-s%E1%BA%A3n-ph%E1%BA%A9m-t%C4%A9nh.jpg?s=612x612&w=0&k=20&c=M3-YoePcfX_NAgMIGCH0wA3RhxirAjm9Rc75wolDtYE=",
        "type": "new_arrival",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "7db59c20-ab7b-4319-b20e-39ad221f6fc4",
        "name": "Earrings Diamond B",
        "price": "3000",
        "image": "https://media.istockphoto.com/id/1316582885/vi/anh/hoa-tai-kim-c%C6%B0%C6%A1ng-tr%C3%AAn-m%C3%A0u-%C4%91en.jpg?s=612x612&w=0&k=20&c=KVugbydv_5_6Uw2Xo4hpup0HsHEq6qNeaZDhE9WiqVI=",
        "description": "https://media.istockphoto.com/id/1316582885/vi/anh/hoa-tai-kim-c%C6%B0%C6%A1ng-tr%C3%AAn-m%C3%A0u-%C4%91en.jpg?s=612x612&w=0&k=20&c=KVugbydv_5_6Uw2Xo4hpup0HsHEq6qNeaZDhE9WiqVI=",
        "type": "new_arrival",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "ea03d43f-b4e6-41ea-b636-82f298d14bb4",
        "name": "Earrings Diamond SS",
        "price": "4500",
        "image": "https://media.istockphoto.com/id/1370887785/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-trang-s%E1%BB%A9c-hoa-tai-thanh-l%E1%BB%8Bch-%C4%91%C6%B0%E1%BB%A3c-%C4%91%E1%BA%B7t-trong-n%E1%BB%81n-%C4%91en.jpg?s=612x612&w=0&k=20&c=cDC3TfBln0UAB2aBTs4RBXMCy-G-e3fJmCxJ0KXJDrk=",
        "description": "https://media.istockphoto.com/id/1370887785/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-trang-s%E1%BB%A9c-hoa-tai-thanh-l%E1%BB%8Bch-%C4%91%C6%B0%E1%BB%A3c-%C4%91%E1%BA%B7t-trong-n%E1%BB%81n-%C4%91en.jpg?s=612x612&w=0&k=20&c=cDC3TfBln0UAB2aBTs4RBXMCy-G-e3fJmCxJ0KXJDrk=",
        "type": "feature",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "cd92ae85-0bec-4709-ab8f-bba6541f3189",
        "name": "Earrings Diamond gg",
        "price": "4000",
        "image": "https://media.istockphoto.com/id/1474789549/vi/anh/b%E1%BB%99-trang-s%E1%BB%A9c-thanh-l%E1%BB%8Bch-trang-s%E1%BB%A9c-%C4%91%C6%B0%E1%BB%A3c-%C4%91%E1%BA%B7t-b%E1%BA%B1ng-%C4%91%C3%A1-qu%C3%BD-ph%E1%BB%A5-ki%E1%BB%87n-trang-s%E1%BB%A9c-c%E1%BA%AFt-d%C3%A1n-s%E1%BA%A3n-ph%E1%BA%A9m-t%C4%A9nh.jpg?s=612x612&w=0&k=20&c=70yUGQ8zUYagv0cYZNfiD-hVhygUE0aayRYwJBZkers=",
        "description": "https://media.istockphoto.com/id/1474789549/vi/anh/b%E1%BB%99-trang-s%E1%BB%A9c-thanh-l%E1%BB%8Bch-trang-s%E1%BB%A9c-%C4%91%C6%B0%E1%BB%A3c-%C4%91%E1%BA%B7t-b%E1%BA%B1ng-%C4%91%C3%A1-qu%C3%BD-ph%E1%BB%A5-ki%E1%BB%87n-trang-s%E1%BB%A9c-c%E1%BA%AFt-d%C3%A1n-s%E1%BA%A3n-ph%E1%BA%A9m-t%C4%A9nh.jpg?s=612x612&w=0&k=20&c=70yUGQ8zUYagv0cYZNfiD-hVhygUE0aayRYwJBZkers=",
        "type": "feature",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "248b03c9-2c46-4cf7-aa63-cf14d495fc5e",
        "name": "Earrings Silver A",
        "price": "2000",
        "image": "https://media.istockphoto.com/id/1147774245/vi/anh/b%C3%B4ng-tai-c%C6%B0%E1%BB%9Bi-tr%C3%AAn-tay-c%C3%B4-d%C3%A2u-bu%E1%BB%95i-s%C3%A1ng-c%E1%BB%A7a-c%C3%B4-d%C3%A2u-v%C3%A0-c%C3%A1c-ph%E1%BB%A5-ki%E1%BB%87n-trang-s%E1%BB%A9c-v%C3%A0-kh%C3%A1i-ni%E1%BB%87m-trang.jpg?s=612x612&w=0&k=20&c=-Zgc4OOFf2SDUioYGkERVVBG5UkfK9Opz1XV3F0Q3MI=",
        "description": "https://media.istockphoto.com/id/1147774245/vi/anh/b%C3%B4ng-tai-c%C6%B0%E1%BB%9Bi-tr%C3%AAn-tay-c%C3%B4-d%C3%A2u-bu%E1%BB%95i-s%C3%A1ng-c%E1%BB%A7a-c%C3%B4-d%C3%A2u-v%C3%A0-c%C3%A1c-ph%E1%BB%A5-ki%E1%BB%87n-trang-s%E1%BB%A9c-v%C3%A0-kh%C3%A1i-ni%E1%BB%87m-trang.jpg?s=612x612&w=0&k=20&c=-Zgc4OOFf2SDUioYGkERVVBG5UkfK9Opz1XV3F0Q3MI=",
        "type": "new_arrival",
        "category_id": "8f5a1945-86c4-4126-bba3-af9cfe2e1733"
    },
    {
        "id": "98473a38-410b-44d4-bf82-9a0fd9d1eb17",
        "name": "Earrings Silver B",
        "price": "2000",
        "image": "https://media.istockphoto.com/id/1470960760/vi/anh/b%C3%B4ng-tai-v%E1%BB%9Bi-ng%E1%BB%8Dc-l%E1%BB%A5c-b%E1%BA%A3o.jpg?s=612x612&w=0&k=20&c=cVCkLcnzbukOhzYVOiV5w_QUp4Z_nIpe3xyM1wokdIw=",
        "description": "https://media.istockphoto.com/id/1470960760/vi/anh/b%C3%B4ng-tai-v%E1%BB%9Bi-ng%E1%BB%8Dc-l%E1%BB%A5c-b%E1%BA%A3o.jpg?s=612x612&w=0&k=20&c=cVCkLcnzbukOhzYVOiV5w_QUp4Z_nIpe3xyM1wokdIw=",
        "type": "new_arrival",
        "category_id": "8f5a1945-86c4-4126-bba3-af9cfe2e1733"
    },
    {
        "id": "c01ce177-afc5-4a7a-8e08-defbf9f74d4a",
        "name": "Earrings Diamond F",
        "price": "4500",
        "image": "https://media.istockphoto.com/id/1347727261/vi/anh/b%E1%BB%99-b%C3%B4ng-tai-v%E1%BB%9Bi-%C4%91%C3%A1-qu%C3%BD-m%C3%A0u.jpg?s=612x612&w=0&k=20&c=QDiu5_wX_2iV1Mng7-9lwj73Od7HsJsdc6Sz081NiSE=",
        "description": "https://media.istockphoto.com/id/1347727261/vi/anh/b%E1%BB%99-b%C3%B4ng-tai-v%E1%BB%9Bi-%C4%91%C3%A1-qu%C3%BD-m%C3%A0u.jpg?s=612x612&w=0&k=20&c=QDiu5_wX_2iV1Mng7-9lwj73Od7HsJsdc6Sz081NiSE=",
        "type": "new_arrival",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "10d19c4d-96b7-41c9-9516-c80d9a64c5cd",
        "name": "necklace Gold A",
        "price": "3000",
        "image": "https://media.istockphoto.com/id/1166180482/vi/anh/d%C3%A2y-chuy%E1%BB%81n-v%C3%A0ng.jpg?s=612x612&w=0&k=20&c=WpJREP3TCY9wCKuMW0vrZh9hPZLepTCs9HfywxWsplU=",
        "description": "https://media.istockphoto.com/id/1166180482/vi/anh/d%C3%A2y-chuy%E1%BB%81n-v%C3%A0ng.jpg?s=612x612&w=0&k=20&c=WpJREP3TCY9wCKuMW0vrZh9hPZLepTCs9HfywxWsplU=",
        "type": "new_arrival",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "8d8825cc-3a37-445c-82c1-0873e3a95a9a",
        "name": "necklace Gold b",
        "price": "3500",
        "image": "https://media.istockphoto.com/id/1339990516/vi/anh/ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-v%E1%BB%9Bi-m%E1%BB%99t-chi%E1%BA%BFc-v%C3%B2ng-c%E1%BB%95-%C4%91%E1%BA%AFt-ti%E1%BB%81n-ph%E1%BB%A5-ki%E1%BB%87n-th%E1%BB%9Di-trang-v%C3%A0-%C4%91%E1%BB%93-trang-s%E1%BB%A9c.jpg?s=612x612&w=0&k=20&c=p2_YW1iZS7QAR-6nrlfTst0ird7pknq86wxhH7AHT1o=",
        "description": "https://media.istockphoto.com/id/1339990516/vi/anh/ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-v%E1%BB%9Bi-m%E1%BB%99t-chi%E1%BA%BFc-v%C3%B2ng-c%E1%BB%95-%C4%91%E1%BA%AFt-ti%E1%BB%81n-ph%E1%BB%A5-ki%E1%BB%87n-th%E1%BB%9Di-trang-v%C3%A0-%C4%91%E1%BB%93-trang-s%E1%BB%A9c.jpg?s=612x612&w=0&k=20&c=p2_YW1iZS7QAR-6nrlfTst0ird7pknq86wxhH7AHT1o=",
        "type": "new_arrival",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "f2c8af9e-5e95-4103-a7b7-e6b6d111e221",
        "name": "necklace Silver C",
        "price": "2000",
        "image": "https://media.istockphoto.com/id/1368150089/vi/anh/v%C3%B2ng-c%E1%BB%95-kim-c%C6%B0%C6%A1ng-tr%C3%AAn-n%E1%BB%81n-%C4%91en.jpg?s=612x612&w=0&k=20&c=59P0J3lj8jV07CBHz5YfunOA-KeIWl9D0VfMBR2_E14=",
        "description": "https://media.istockphoto.com/id/1368150089/vi/anh/v%C3%B2ng-c%E1%BB%95-kim-c%C6%B0%C6%A1ng-tr%C3%AAn-n%E1%BB%81n-%C4%91en.jpg?s=612x612&w=0&k=20&c=59P0J3lj8jV07CBHz5YfunOA-KeIWl9D0VfMBR2_E14=",
        "type": "new_arrival",
        "category_id": "8f5a1945-86c4-4126-bba3-af9cfe2e1733"
    },
    {
        "id": "bad3316d-7b23-46b7-b67a-1e626e483994",
        "name": "necklace Gold C",
        "price": "4000",
        "image": "https://media.istockphoto.com/id/173548581/vi/anh/kh%C3%B3a-v%C3%A0ng.jpg?s=612x612&w=0&k=20&c=3jXaewfFcfgnbtUZ6NImta6m-cuKoN38RTnmXoCCt2U=",
        "description": "https://media.istockphoto.com/id/173548581/vi/anh/kh%C3%B3a-v%C3%A0ng.jpg?s=612x612&w=0&k=20&c=3jXaewfFcfgnbtUZ6NImta6m-cuKoN38RTnmXoCCt2U=",
        "type": "new_arrival",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "dfb1dd1e-ee86-4b48-ac92-01233cb5bfdb",
        "name": "necklace Gold W",
        "price": "4000",
        "image": "https://media.istockphoto.com/id/1279696100/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-d%C3%A2y-chuy%E1%BB%81n-v%C3%A0ng-s%C3%A1ng-b%C3%B3ng-v%C3%A0-trang-s%E1%BB%A9c-d%C3%A2y-chuy%E1%BB%81n.jpg?s=612x612&w=0&k=20&c=VTYDYltjSdyFF56xNuZxl5kGAJcmBKZVYjlduwZHpN4=",
        "description": "https://media.istockphoto.com/id/1279696100/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-d%C3%A2y-chuy%E1%BB%81n-v%C3%A0ng-s%C3%A1ng-b%C3%B3ng-v%C3%A0-trang-s%E1%BB%A9c-d%C3%A2y-chuy%E1%BB%81n.jpg?s=612x612&w=0&k=20&c=VTYDYltjSdyFF56xNuZxl5kGAJcmBKZVYjlduwZHpN4=",
        "type": "new_arrival",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "26a05653-40ac-477a-9fe7-e39653c10a90",
        "name": "necklace Diamond A",
        "price": "4500",
        "image": "https://media.istockphoto.com/id/1372302961/vi/anh/v%C3%B2ng-c%E1%BB%95-kim-c%C6%B0%C6%A1ng-tr%C3%AAn-n%E1%BB%81n-%C4%91en.jpg?s=612x612&w=0&k=20&c=ywXcTTuHy8djPMNkZhb8q64mj7IXVeey7JvrQ3KGmWQ=",
        "description": "https://media.istockphoto.com/id/1372302961/vi/anh/v%C3%B2ng-c%E1%BB%95-kim-c%C6%B0%C6%A1ng-tr%C3%AAn-n%E1%BB%81n-%C4%91en.jpg?s=612x612&w=0&k=20&c=ywXcTTuHy8djPMNkZhb8q64mj7IXVeey7JvrQ3KGmWQ=",
        "type": "new_arrival",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "c8661105-c024-4024-a1a9-0b507dc436ee",
        "name": "necklace Diamond FF",
        "price": "4500",
        "image": "https://media.istockphoto.com/id/163122066/vi/anh/v%C3%B2ng-c%E1%BB%95-kim-c%C6%B0%C6%A1ng-tr%C3%B2n.jpg?s=612x612&w=0&k=20&c=wFjyA07NjTmwolQNXAfgXW63Xa4HArHr-fv3Jkm47rs=",
        "description": "https://media.istockphoto.com/id/163122066/vi/anh/v%C3%B2ng-c%E1%BB%95-kim-c%C6%B0%C6%A1ng-tr%C3%B2n.jpg?s=612x612&w=0&k=20&c=wFjyA07NjTmwolQNXAfgXW63Xa4HArHr-fv3Jkm47rs=",
        "type": "new_arrival",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "4c83b9d3-5652-465b-a38a-2143b2e4536c",
        "name": "necklace Diamond E",
        "price": "4000",
        "image": "https://media.istockphoto.com/id/1456831685/vi/anh/v%C3%B2ng-c%E1%BB%95-s%C3%A0nh-%C4%91i%E1%BB%87u-v%E1%BB%9Bi-%C4%91%C3%A1-qu%C3%BD-tr%C3%AAn-trang-s%E1%BB%A9c-b%C3%A1n-th%C3%A2n-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng.jpg?s=612x612&w=0&k=20&c=kPsueybx8kU8ozUpVdeuhs82-BVXvEU6frzmSSWQS2U=",
        "description": "https://media.istockphoto.com/id/1456831685/vi/anh/v%C3%B2ng-c%E1%BB%95-s%C3%A0nh-%C4%91i%E1%BB%87u-v%E1%BB%9Bi-%C4%91%C3%A1-qu%C3%BD-tr%C3%AAn-trang-s%E1%BB%A9c-b%C3%A1n-th%C3%A2n-tr%C3%AAn-n%E1%BB%81n-tr%E1%BA%AFng.jpg?s=612x612&w=0&k=20&c=kPsueybx8kU8ozUpVdeuhs82-BVXvEU6frzmSSWQS2U=",
        "type": "new_arrival",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "3c2b6d27-1fd6-45a0-bff1-76a0538a485e",
        "name": "necklace Diamond SS",
        "price": "6000",
        "image": "https://media.istockphoto.com/id/493610261/vi/anh/d%C3%A2y-chuy%E1%BB%81n-kim-c%C6%B0%C6%A1ng-b%E1%BA%AFn-v%C3%A0o-n%E1%BB%81n-%C4%91en.jpg?s=612x612&w=0&k=20&c=vMnyizSmK_XgG4noXE4hfBTt6pUZTq2WMrNSRK9r1sI=",
        "description": "https://media.istockphoto.com/id/493610261/vi/anh/d%C3%A2y-chuy%E1%BB%81n-kim-c%C6%B0%C6%A1ng-b%E1%BA%AFn-v%C3%A0o-n%E1%BB%81n-%C4%91en.jpg?s=612x612&w=0&k=20&c=vMnyizSmK_XgG4noXE4hfBTt6pUZTq2WMrNSRK9r1sI=",
        "type": "feature",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "4fd6660c-5ef8-440b-bd57-10d26089d33e",
        "name": "necklace Gold HH",
        "price": "3500",
        "image": "https://media.istockphoto.com/id/1372303652/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-d%C3%A2y-chuy%E1%BB%81n-v%C3%A0ng-tr%C3%AAn-n%E1%BB%81n-%C4%91en.jpg?s=612x612&w=0&k=20&c=1u6c_JkJCKYrIlcuAt8BBjUUFoBrLRmihih19OtZ4pM=",
        "description": "https://media.istockphoto.com/id/1372303652/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-d%C3%A2y-chuy%E1%BB%81n-v%C3%A0ng-tr%C3%AAn-n%E1%BB%81n-%C4%91en.jpg?s=612x612&w=0&k=20&c=1u6c_JkJCKYrIlcuAt8BBjUUFoBrLRmihih19OtZ4pM=",
        "type": "best_seller",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "0a2a58ce-fc8b-4239-9d22-f59b9aa023c1",
        "name": "necklace Gold F",
        "price": "5000",
        "image": "https://media.istockphoto.com/id/866247946/vi/anh/hai-m%E1%BA%B7t-d%C3%A2y-chuy%E1%BB%81n-tr%C3%A1i-tim-v%E1%BB%9Bi-v%C3%B2ng-c%E1%BB%95-%C4%91%C6%B0%E1%BB%A3c-c%C3%A1ch-ly-tr%C3%AAn-n%E1%BB%81n-ph%C3%A1t-s%C3%A1ng-m%E1%BB%81m-m%E1%BA%A1i.jpg?s=612x612&w=0&k=20&c=bFB7HVQGjL_QowU_r6mfTp6x2pWD9TyIuZ0URChG8qk=",
        "description": "https://media.istockphoto.com/id/866247946/vi/anh/hai-m%E1%BA%B7t-d%C3%A2y-chuy%E1%BB%81n-tr%C3%A1i-tim-v%E1%BB%9Bi-v%C3%B2ng-c%E1%BB%95-%C4%91%C6%B0%E1%BB%A3c-c%C3%A1ch-ly-tr%C3%AAn-n%E1%BB%81n-ph%C3%A1t-s%C3%A1ng-m%E1%BB%81m-m%E1%BA%A1i.jpg?s=612x612&w=0&k=20&c=bFB7HVQGjL_QowU_r6mfTp6x2pWD9TyIuZ0URChG8qk=",
        "type": "special_offer",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "87c8a374-0ca9-471b-b735-3e977fe750f0",
        "name": "necklace Diamond II",
        "price": "6000",
        "image": "https://media.istockphoto.com/id/118377252/vi/anh/v%C3%B2ng-c%E1%BB%95-kim-c%C6%B0%C6%A1ng.jpg?s=612x612&w=0&k=20&c=C70CTFjeNrdK8ogW-MO_ixzQWOYo4-HOMMqcCGOkCeY=",
        "description": "https://media.istockphoto.com/id/118377252/vi/anh/v%C3%B2ng-c%E1%BB%95-kim-c%C6%B0%C6%A1ng.jpg?s=612x612&w=0&k=20&c=C70CTFjeNrdK8ogW-MO_ixzQWOYo4-HOMMqcCGOkCeY=",
        "type": "special_offer",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "35b77015-b816-4868-9a1f-5e63ec5238a5",
        "name": "necklace Gold II",
        "price": "6000",
        "image": "https://media.istockphoto.com/id/1495647031/vi/anh/v%C3%B2ng-c%E1%BB%95-v%C3%A0ng-tr%C3%AAn-n%E1%BB%81n-v%C3%A0ng.jpg?s=612x612&w=0&k=20&c=wjWQq1c84PoZI0DRtm6Nw-j9W0QXMb7pE_0Z6VKsYys=",
        "description": "https://media.istockphoto.com/id/1495647031/vi/anh/v%C3%B2ng-c%E1%BB%95-v%C3%A0ng-tr%C3%AAn-n%E1%BB%81n-v%C3%A0ng.jpg?s=612x612&w=0&k=20&c=wjWQq1c84PoZI0DRtm6Nw-j9W0QXMb7pE_0Z6VKsYys=",
        "type": "special_offer",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "0f6e498c-85b1-44a1-82b5-4612af52c517",
        "name": "necklace Gold JJ",
        "price": "6000",
        "image": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5lY2tsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "description": "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5lY2tsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "type": "special_offer",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "d4172511-62e0-4e62-95e8-2857be7c3e02",
        "name": "necklace Diamond NN",
        "price": "6000",
        "image": "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5lY2tsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "description": "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5lY2tsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "type": "special_offer",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "3a811e20-8d19-4d58-ae73-d7f68acc85f9",
        "name": "necklace Diamond III",
        "price": "6000",
        "image": "https://images.unsplash.com/photo-1611583027838-515a1087afdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fG5lY2tsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "description": "https://images.unsplash.com/photo-1611583027838-515a1087afdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fG5lY2tsYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "type": "special_offer",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "9780265d-2346-46d1-9589-222f079c1bb7",
        "name": "BRACELET Gold I",
        "price": "6000",
        "image": "https://images.unsplash.com/photo-1611107683227-e9060eccd846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEJSQUNFTEVUJTIwR09MRHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "description": "https://images.unsplash.com/photo-1611107683227-e9060eccd846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEJSQUNFTEVUJTIwR09MRHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "type": "new_arrival",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "105fa24f-8866-4dc5-9595-1b42c12c4176",
        "name": "BRACELET Gold A",
        "price": "6000",
        "image": "https://images.unsplash.com/photo-1689367436414-7acc3fdc3e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEJSQUNFTEVUJTIwR09MRHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "description": "https://images.unsplash.com/photo-1689367436414-7acc3fdc3e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fEJSQUNFTEVUJTIwR09MRHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "type": "new_arrival",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "cb1579b3-3697-4ca7-a543-6fda08ea11b3",
        "name": "BRACELET GOLD III",
        "price": "6000",
        "image": "https://images.unsplash.com/photo-1679156271456-d6068c543ee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxCUkFDRUxFVCUyMEdPTER8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "description": "https://images.unsplash.com/photo-1679156271456-d6068c543ee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxCUkFDRUxFVCUyMEdPTER8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "type": "new_arrival",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "f2d2a6d5-8b34-4113-bbff-096d238091ef",
        "name": "BRACELET GOLD IV",
        "price": "6000",
        "image": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxCUkFDRUxFVCUyMEdPTER8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "description": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUxfHxCUkFDRUxFVCUyMEdPTER8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "type": "feature",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "567428f9-7de9-42b1-a93f-546255f45eab",
        "name": "BRACELET GOLD V",
        "price": "6000",
        "image": "https://images.unsplash.com/photo-1635767798595-a1d2c9deacb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHxCUkFDRUxFVCUyMEdPTER8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "description": "https://images.unsplash.com/photo-1635767798595-a1d2c9deacb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHxCUkFDRUxFVCUyMEdPTER8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "type": "new_arrival",
        "category_id": "57405cd5-61ac-4f65-b1e1-e9e95839dbf1"
    },
    {
        "id": "1ab94cc3-fd5d-4241-ae50-d027177a05c7",
        "name": "BRACELET Diamond I",
        "price": "7000",
        "image": "https://images.unsplash.com/photo-1679156271456-d6068c543ee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzEzfHxCUkFDRUxFVCUyMGRJQU1PTkR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "description": "https://images.unsplash.com/photo-1679156271456-d6068c543ee7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzEzfHxCUkFDRUxFVCUyMGRJQU1PTkR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "type": "new_arrival",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "c261e9eb-dd1c-49a5-b1c3-b0b1215ce6d5",
        "name": "BRACELET Diamond III",
        "price": "7000",
        "image": "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-victoriavine-tennis-bracelet-66886344_1006794_ED_M.jpg?defaultImage=NoImageAvailableInternal&fmt=webp",
        "description": "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-victoriavine-tennis-bracelet-66886344_1006794_ED_M.jpg?defaultImage=NoImageAvailableInternal&fmt=webp",
        "type": "feature",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "105f88d5-8a3b-4d8d-b04a-9ef63c2d897f",
        "name": "BRACELET Diamond II",
        "price": "6000",
        "image": "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-tt1-wide-diamond-hinged-bangle-68127378_1058596_ED_M.jpg?defaultImage=NoImageAvailableInternal&fmt=webp",
        "description": "https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-tt1-wide-diamond-hinged-bangle-68127378_1058596_ED_M.jpg?defaultImage=NoImageAvailableInternal&fmt=webp",
        "type": "best_seller",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "0c1958d0-5382-40b7-a615-d240786cfb14",
        "name": "BRACELET Diamond VI",
        "price": "6000",
        "image": "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd36d3a7b/images/hi-res/RGB500ALL_RGB500S_GB9241_Hero_1.jpg?sw=1000&sh=1000",
        "description": "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dwd36d3a7b/images/hi-res/RGB500ALL_RGB500S_GB9241_Hero_1.jpg?sw=1000&sh=1000",
        "type": "best_seller",
        "category_id": "b57ad855-e474-43e1-8c2d-29c20eb26fad"
    },
    {
        "id": "96184a6c-21a0-436f-a16f-760ec6bbb6b4",
        "name": "BRACELET Diamond V",
        "price": "6000",
        "image": "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw82808470/images/hi-res/RGB019_RGB019_GB7232_Hero_1.jpg?sw=1000&sh=1000",
        "description": "https://www.graff.com/dw/image/v2/BFNT_PRD/on/demandware.static/-/Sites-master-catalog/default/dw82808470/images/hi-res/RGB019_RGB019_GB7232_Hero_1.jpg?sw=1000&sh=1000",
        "type": "new_arrival",
        "category_id": "8f5a1945-86c4-4126-bba3-af9cfe2e1733"
    }
]