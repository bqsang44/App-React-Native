const DATA = [
  {
    question: 'Đây là vật dụng gì?',
    image: require('../../assets/images/quiz/do-gom-thoi-vua-hung.jpg'),
    options: ['Đồ gốm thời vua Hùng', 'Bình gỗ', 'Bình làm bằng đồng'],
    correct_option: 'Đồ gốm thời vua Hùng',
  },

  {
    question: 'Giỗ tổ Hùng Vương diễn ra vào ngày nào hằng năm (âm lịch)?',
    options: ['Mùng 10 tháng 3', 'Mùng 8 tháng 3', 'Mùng 9 tháng 3'],
    correct_option: 'Mùng 10 tháng 3',
  },

  {
    question: 'Ở thời Hùng Vương, con trai của vua Hùng được gọi là?',
    options: ['Công chúa', 'Quân Lang', 'Hoàng Tử'],
    correct_option: 'Hoàng Tử',
  },

  {
    question: 'Nhà nước đầu tiên của nước ta có tên là gì?',
    options: ['Việt Nam', 'Văn Lang', 'Âu Lạc'],
    correct_option: 'Văn Lang',
  },

  {
    question: 'Vị vua đầu tiên của nước ta là?',
    options: ['An Dương Vương', 'Ngô Quyền', 'Hồ Chí Minh'],
    correct_option: 'An Dương Vương',
  },

  {
    question: 'Đây là đâu?',
    image: require('../../assets/images/quiz/thanh-co-loa.jpg'),
    options: ['Thành Cổ Loa ngày nay', 'Quốc Tử Giám', 'Đền thờ vua Hùng'],
    correct_option: 'Thành Cổ Loa ngày nay',
  },

  {
    question: 'Thành tựu đặc sắc của người dân Âu Lạc là gì?',
    options: [
      'Chế tạo nỏ bắn ra nhiều tên',
      'Xây dựng thành Cổ Loa',
      'Cả 2 ý trên',
    ],
    correct_option: 'Cả 2 ý trên',
  },

  {
    question:
      'Triệu Đà đã hoãn binh, cho con trai làm rể An Dương Vương làm gợi nhớ đến câu chuyện nào?',
    options: ['Trọng Thủy - Mị Châu', 'Tây du kí', 'Ăn khế trả vàng'],
    correct_option: 'Trọng Thủy - Mị Châu',
  },

  {
    question: 'Những phong tục nào đến nay còn tồn tại?',
    options: [
      'Ăn trầu, búi tóc',
      'Phụ nữ thì thích đeo đồ trang sức',
      'Cả 2 ý trên đều đúng',
    ],
    correct_option: 'Cả 2 ý trên đều đúng',
  },

  {
    question: 'Người Lạc Việt cư trú trong các loại hình nhà nào dưới đây?',
    options: ['Nhà trệt trên mặt đất', 'Nhà gỗ', 'Nhà sàn'],
    correct_option: 'Nhà sàn',
  },

  {
    question:
      'Triệu Đà nhiều lần kéo quân sang xâm lược nước ta nhưng lần nào cũng thất bại vì?',
    options: [
      'Nhân dân Âu Lạc đoàn kết chống giặc',
      'Có tướng chỉ huy giỏi, vũ khí tốt',
      'Cả 2 ý trên đều đúng',
    ],
    correct_option: 'Cả 2 ý trên đều đúng',
  },

  {
    question: 'Vì sao An Dương Vương thất bại trước Triệu Đà?',
    options: [
      'Thế lực của Triệu Đà quá mạnh',
      'Gả con gái cho Triệu Đà',
      'Mất nỏ thần',
    ],
    correct_option: 'Mất nỏ thần',
  },

  {
    question: 'Triệu Đà đã dùng mưu gì để thắng An Dương Vương?',
    options: ['Hoãn binh giảng hòa', 'Chia rẽ nội bộ', 'Cả 2 ý đều đúng'],
    correct_option: 'Cả 2 ý đều đúng',
  },

  {
    question: 'Xã hội Văn Lang gồm những tầng lớp nào?',
    options: [
      'Công nhân, người lao động',
      'Tầng lớp công nông',
      'Vua, lạc hầu và lạc tướng, lạc dân, nô tì',
    ],
    correct_option: 'Vua, lạc hầu và lạc tướng, lạc dân, nô tì',
  },

  {
    question: 'Nối từ : Công cụ dùng để làm ruộng là ...',
    options: ['Lưỡi cày đồng', 'Giáo mác', 'Vòng trang sức'],
    correct_option: 'Lưỡi cày đồng',
  },

  {
    question: 'Nối từ : Công cụ dùng để làm vũ khí chống giặc là ...',
    options: ['Lưỡi cày đồng', 'Giáo mác', 'Vòng trang sức'],
    correct_option: 'Giáo mác',
  },

  {
    question: 'Nối từ : Công cụ dùng để làm trang sức là ...',
    options: ['Lưỡi cày đồng', 'Giáo mác', 'Vòng trang sức'],
    correct_option: 'Vòng trang sức',
  },

  {
    question: 'Nước Văn Lang tồn tại qua mấy đời vua hùng?',
    options: ['18 đời vua Hùng', '81 đời vua Hùng', '7*7 - 49 đời vua Hùng'],
    correct_option: '18 đời vua Hùng',
  },

  {
    question:
      'Đâu không phải là phong tục, tập quán của người Lạc Việt dưới thời Văn Lang?',
    options: ['Nhuộm răng đen', 'Ăn trầu', 'Đeo hoa tai bằng đá'],
    correct_option: 'Đeo hoa tai bằng đá',
  },

  {
    question: 'Nước Văn Lang có vua nào?',
    options: ['Vua Hùng', 'Vua Lý', 'Vua Trần'],
    correct_option: 'Vua Hùng',
  },
];

export default DATA;
