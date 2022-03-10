const DATA = [
  {
    question: 'Nhà Trần ra đời trong hoàn cảnh nào?',
    options: [
      'Đoạn ngôi vua',
      'Do vua thời Lý không có con trai',
      'Nhà Trần thâu tóm quyền lực',
    ],
    correct_option: 'Do vua thời Lý không có con trai',
  },

  {
    question: 'Nhà Trần chia cả nước thành bao nhiêu lộ phủ?',
    options: ['11 lộ phủ', '12 lộ phủ', '13 lộ phủ'],
    correct_option: '12 lộ phủ',
  },

  {
    question: 'Thời nhà Trần, Thăng Long có bao nhiêu phố phường?',
    options: ['61 phố phường', '62 phố phường', '63 phố phường'],
    correct_option: '61 phố phường',
  },

  {
    question: 'Đứng đầu các lộ phủ là ai?',
    options: ['Chủ tịch lộ', 'Quan lộ', 'Chánh phó An Phủ Sứ'],
    correct_option: 'Chánh phó An Phủ Sứ',
  },

  {
    question:
      'Trần Thủ Độ buộc Lý Chiêu Hoàng nhường ngôi cho chồng là Trần Cảnh năm nào?',
    options: ['Năm 1223', 'Năm 1224', 'Năm 1225'],
    correct_option: 'Năm 1225',
  },

  {
    question: 'Đây là cảnh gì?',
    image: require('../../assets/images/quiz/kiem-tra-de-deu-nha-tran.jpg'),
    options: [
      'Quan nhà Trần đang kiểm tra đồng ruộng',
      'Kiểm tra đê điều thời nhà Trần',
      'Kiểm tra đập',
    ],
    correct_option: 'Kiểm tra đê điều thời nhà Trần',
  },

  {
    question: 'Nhà Trần được thành lập vào năm nào?',
    options: ['Đầu năm 1226', 'Giữa năm 1226', 'Cuối năm 1226'],
    correct_option: 'Đầu năm 1226',
  },

  {
    question: 'Vua Trần đặt trống lớn ở thềm cung điện để làm gì?',
    options: [
      'Để nhân dân đến khi có lễ hội',
      'Để tạo vẻ đẹp cho cung điện',
      'Để dân đến đánh khi có điều gì cần xin, hoặc bị oan ức',
    ],
    correct_option: 'Để dân đến đánh khi có điều gì cần xin, hoặc bị oan ức',
  },

  {
    question: 'Nhà Trần đã có những việc làm gì để củng cố xây dựng đất nước? ',
    options: [
      'Xây dựng lực lượng quân đội, tăng gia sản xuất',
      'Đắp lại đê điều, mở rộng điền đồn',
      'Cả hai ý trên đều đúng',
    ],
    correct_option: 'Cả hai ý trên đều đúng',
  },

  {
    question: 'Nhà Trần đã lập ra Hà Đê Sứ để làm gì?',
    options: [
      'Để trong coi việc đắp đê và bảo vệ đê',
      'Để chống lũ lục',
      'Để chống hạn hán',
    ],
    correct_option: 'Để trong coi việc đắp đê và bảo vệ đê',
  },

  {
    question: 'Nhà Trần đã thu được kết quả gì trong việc đắp đê?',
    options: [
      'Đất nước không bị xâm lăng',
      'Nền kinh tế nông nghiệp phát triển, đời sống nhân dân ấm no',
      'Ngành nuôi trồng thuỷ sản phát triển, đời sống nhân dân ấm no',
    ],
    correct_option:
      'Nền kinh tế nông nghiệp phát triển, đời sống nhân dân ấm no',
  },

  {
    question:
      'Ý chí quyết tâm tiêu diệt quân xâm lược của quân dân nhà Trần thể hiện như thế nào?',
    options: [
      'Đồng loạt hô to đánh và nhận được sự ủng hộ',
      'Bóp nát quả cam',
      'Đập nát cái ly',
    ],
    correct_option: 'Đồng loạt hô to đánh và nhận được sự ủng hộ',
  },

  {
    question: 'Vua tôi nhà Trần đã dùng kế gì để đánh giặc?',
    options: [
      'Dùng võ mục di thư',
      'Dùng Hoàng tiền phá thiên',
      'Kế sách vườn không nhà trống',
    ],
    correct_option: 'Kế sách vườn không nhà trống',
  },

  {
    question:
      'Trận đánh lớn trong cuộc kháng chiến quân Mông - Nguyên thời Trần là?',
    options: [
      'Trận Đông Bộ Đầu - Bến sông Hồng ngày nay',
      'Trận Chi Lăng',
      'Trận Tam Cốc',
    ],
    correct_option: 'Trận Đông Bộ Đầu - Bến sông Hồng ngày nay',
  },

  {
    question:
      'Câu nói: Đầu thần chưa rơi xuống đất, xin bệ hạ đừng lo. là của ai?',
    options: ['Trần Thủ Độ', 'Trần Hiêng Nghi', 'Trần Hưng Đạo'],
    correct_option: 'Trần Thủ Độ',
  },

  {
    question: 'Đây là gì?',
    image: require('../../assets/images/quiz/hoi-nghi-dien-hong.jpg'),
    options: ['Hội nghị Diên Hồng', 'Hội nghị Blance', 'Hội nghị đánh giặc'],
    correct_option: 'Hội nghị Diên Hồng',
  },

  {
    question: 'Di tích thành nhà Hồ (Thanh Hóa) gắn với sự kiện nào?',
    options: [
      'Hồ Quý Ly thực hiện những biện pháp nhằm tăng cường củng cố quân sự và quốc phòng',
      'Tường thành chống giặc của nhà Hồ',
      'Tường thành kiên cố thời nhà Trần',
    ],
    correct_option:
      'Hồ Quý Ly thực hiện những biện pháp nhằm tăng cường củng cố quân sự và quốc phòng',
  },

  {
    question: 'Tên gọi của nước ta dưới thời Hồ là gì?',
    options: ['Đại Thanh', 'Đại Ngu', 'Đại Ngưu'],
    correct_option: 'Đại Ngu',
  },

  {
    question: 'Hồ Quý Ly truất ngôi vua Trần vào năm nào?',
    options: ['Năm 1400', 'Năm 1401', 'Năm 1402'],
    correct_option: 'Năm 1400',
  },

  {
    question: 'Do đâu nhà Hồ không chống nổi quân Minh xâm lược?',
    options: [
      'Do thiếu tiền của và binh lính',
      'Do không đoàn kết toàn dân để kháng chiến mà chỉ dựa vào quân đội',
      'Do chủ quan lực lượng',
    ],
    correct_option:
      'Do không đoàn kết toàn dân để kháng chiến mà chỉ dựa vào quân đội',
  },
];

export default DATA;
