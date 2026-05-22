export interface SearchItem {
  sectionId: string;
  title: string;
  description?: string;
  keywords?: string[];
}

export function getSearchItems(): SearchItem[] {
  return [
    {
      sectionId: 'ho-so',
      title: 'Hồ sơ Chủ tịch Hồ Chí Minh',
      description: 'Thông tin tóm tắt, tên gọi, vai trò và di sản.',
      keywords: ['tiểu sử', 'hồ sơ', 'Nguyễn Ái Quốc', 'Hồ Chí Minh'],
    },
    {
      sectionId: 'timeline',
      title: 'Dòng thời gian cuộc đời và sự nghiệp',
      description: 'Các mốc chính từ năm 1890 đến di sản sau năm 1969.',
      keywords: ['timeline', 'mốc thời gian', 'cuộc đời', 'sự nghiệp'],
    },
    {
      sectionId: 'cuoc-doi',
      title: 'Địa điểm và hành trình cách mạng',
      description: 'Những nơi gắn với tuổi trẻ, hành trình cứu nước và lãnh đạo cách mạng.',
      keywords: ['địa điểm', 'Bến Nhà Rồng', 'Ba Đình', 'Kim Liên'],
    },
    {
      sectionId: 'tu-tuong',
      title: 'Tư tưởng, đạo đức, phong cách Hồ Chí Minh',
      description: 'Các chủ đề học tập và bộ câu hỏi tương tác.',
      keywords: ['tư tưởng', 'đạo đức', 'phong cách', 'quiz'],
    },
    {
      sectionId: 'tac-pham',
      title: 'Tác phẩm và tư liệu tiêu biểu',
      description: 'Tuyên ngôn Độc lập, Đường Kách mệnh, Di chúc và các tác phẩm khác.',
      keywords: ['tác phẩm', 'tư liệu', 'Tuyên ngôn Độc lập', 'Di chúc'],
    },
    {
      sectionId: 'am-nhac',
      title: 'Âm nhạc về Bác Hồ',
      description: 'Danh mục bài hát, bối cảnh, chủ đề và khu vực gắn audio/video.',
      keywords: ['âm nhạc', 'bài hát', 'Bác Hồ'],
    },
    {
      sectionId: 'tuong-dai',
      title: 'Tượng đài Hồ Chí Minh trên thế giới',
      description: 'Bản đồ nội dung về tượng đài, công viên và công trình tưởng niệm.',
      keywords: ['tượng đài', 'thế giới', 'di sản quốc tế'],
    },
    {
      sectionId: 'cau-chuyen',
      title: 'Câu chuyện về Bác',
      description: 'Các câu chuyện ngắn gắn với bài học đạo đức và câu hỏi suy ngẫm.',
      keywords: ['câu chuyện', 'bài học', 'đạo đức'],
    },
    {
      sectionId: 'guong-sang',
      title: 'Gương sáng và hoạt động của đơn vị',
      description:
        'Không gian cập nhật hoạt động Chi bộ, Đoàn Thanh niên CTIM và phong trào học tập, làm theo Bác.',
      keywords: ['gương sáng', 'đoàn thanh niên', 'CTIM', 'chi bộ', 'hoạt động'],
    },
    {
      sectionId: 'nguon',
      title: 'Nguồn tham khảo và kiểm chứng',
      description: 'Nguồn dữ liệu, ghi chú bản quyền và danh sách tài nguyên cần bổ sung.',
      keywords: ['nguồn', 'tham khảo', 'kiểm chứng'],
    },
  ];
}
