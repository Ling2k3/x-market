import {NavHeaderItem} from "@/models/model";


const navHeaderItems: NavHeaderItem[] = [
    {
        id: "1",
        content: "Điện tử",
        child: [
            {
                id: "1.1",
                content: "Điện thoại di động",
                child: [
                    { id: "1.1.1", content: "Android" },
                    { id: "1.1.2", content: "iOS" },
                ],
            },
            {
                id: "1.2",
                content: "Máy tính xách tay",
                child: [
                    { id: "1.2.1", content: "Windows" },
                    { id: "1.2.2", content: "MacBook" },
                ],
            },
            { id: "1.3", content: "Máy ảnh", child: [{ id: "1.3.1", content: "DSLR" }, { id: "1.3.2", content: "Mirrorless" }] },
            { id: "1.4", content: "Tai nghe", child: [{ id: "1.4.1", content: "Có dây" }, { id: "1.4.2", content: "Không dây" }] },
            { id: "1.5", content: "TV thông minh", child: [{ id: "1.5.1", content: "4K" }, { id: "1.5.2", content: "8K" }] },
        ],
    },
    {
        id: "2",
        content: "Thời trang",
        child: [
            {
                id: "2.1",
                content: "Nam",
                child: [
                    { id: "2.1.1", content: "Áo sơ mi" },
                    { id: "2.1.2", content: "Quần tây" },
                ],
            },
            {
                id: "2.2",
                content: "Nữ",
                child: [
                    { id: "2.2.1", content: "Váy" },
                    { id: "2.2.2", content: "Túi xách" },
                ],
            },
            {
                id: "2.3",
                content: "Trẻ em",
                child: [
                    { id: "2.3.1", content: "Đồ bé trai" },
                    { id: "2.3.2", content: "Đồ bé gái" },
                ],
            },
            { id: "2.4", content: "Giày dép", child: [{ id: "2.4.1", content: "Giày thể thao" }, { id: "2.4.2", content: "Dép lê" }] },
            { id: "2.5", content: "Phụ kiện", child: [{ id: "2.5.1", content: "Thắt lưng" }, { id: "2.5.2", content: "Kính mát" }] },
        ],
    },
    {
        id: "3",
        content: "Nhà cửa & Bếp",
        child: [
            { id: "3.1", content: "Nội thất", child: [{ id: "3.1.1", content: "Ghế sofa" }, { id: "3.1.2", content: "Bàn ăn" }] },
            { id: "3.2", content: "Thiết bị gia dụng", child: [{ id: "3.2.1", content: "Máy giặt" }, { id: "3.2.2", content: "Tủ lạnh" }] },
            { id: "3.3", content: "Trang trí", child: [{ id: "3.3.1", content: "Tranh treo tường" }, { id: "3.3.2", content: "Đèn trang trí" }] },
            { id: "3.4", content: "Đồ dùng nhà bếp", child: [{ id: "3.4.1", content: "Bát đĩa" }, { id: "3.4.2", content: "Nồi chảo" }] },
            { id: "3.5", content: "Dụng cụ vệ sinh", child: [{ id: "3.5.1", content: "Chổi lau" }, { id: "3.5.2", content: "Máy hút bụi" }] },
        ],
    },
    {
        id: "4",
        content: "Sức khỏe & Làm đẹp",
        child: [
            { id: "4.1", content: "Mỹ phẩm", child: [{ id: "4.1.1", content: "Son môi" }, { id: "4.1.2", content: "Kem nền" }] },
            { id: "4.2", content: "Chăm sóc da", child: [{ id: "4.2.1", content: "Sữa rửa mặt" }, { id: "4.2.2", content: "Kem dưỡng" }] },
            { id: "4.3", content: "Chăm sóc tóc", child: [{ id: "4.3.1", content: "Dầu gội" }, { id: "4.3.2", content: "Dầu xả" }] },
            { id: "4.4", content: "Thực phẩm chức năng", child: [{ id: "4.4.1", content: "Vitamin" }, { id: "4.4.2", content: "Protein" }] },
            { id: "4.5", content: "Dụng cụ làm đẹp", child: [{ id: "4.5.1", content: "Máy rửa mặt" }, { id: "4.5.2", content: "Máy uốn tóc" }] },
        ],
    },
    {
        id: "5",
        content: "Thể thao & Dã ngoại",
        child: [
            { id: "5.1", content: "Dụng cụ thể thao", child: [{ id: "5.1.1", content: "Tạ" }, { id: "5.1.2", content: "Bóng đá" }] },
            { id: "5.2", content: "Trang phục thể thao", child: [{ id: "5.2.1", content: "Áo thun thể thao" }, { id: "5.2.2", content: "Quần short" }] },
            { id: "5.3", content: "Phụ kiện dã ngoại", child: [{ id: "5.3.1", content: "Bình nước" }, { id: "5.3.2", content: "Túi ngủ" }] },
            { id: "5.4", content: "Xe đạp", child: [{ id: "5.4.1", content: "Xe đạp địa hình" }, { id: "5.4.2", content: "Xe đạp đua" }] },
            { id: "5.5", content: "Lều cắm trại", child: [{ id: "5.5.1", content: "Lều 2 người" }, { id: "5.5.2", content: "Lều 4 người" }] },
        ],
    },
];

export default navHeaderItems;