import { useEffect, useMemo, useState } from 'react';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import FilterTabs from '../components/ui/FilterTabs';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import Modal from '../components/ui/Modal';
import SearchBar from '../components/ui/SearchBar';
import SectionTitle from '../components/ui/SectionTitle';
import DrumPattern from '../components/patterns/DrumPattern';
import SilkDivider from '../components/patterns/SilkDivider';
import { lifeCareerItems } from '../data/life-career';
import { personProfile } from '../data/person-profile';
import { timelineData } from '../data/timeline';
import type {
  Monument,
  QuizQuestion,
  Song,
  Story,
  ThoughtTopic,
  Work,
} from '../types';

const unitInfo = {
  party:
    'Đảng ủy Ban Quản lý các Khu Chế xuất và Công nghiệp TP. Hồ Chí Minh',
  cell:
    'Chi bộ Trường Cao đẳng bán công Công nghệ và Quản trị doanh nghiệp',
  implementer:
    'Đoàn TNCS Hồ Chí Minh Trường Cao đẳng bán công Công nghệ và Quản trị doanh nghiệp',
};

function UnitIcon({ type }: { type: 'party' | 'school' | 'youth' }) {
  const paths = {
    party: (
      <>
        <path d="M12 3.5l1.8 3.65 4.03.58-2.92 2.85.69 4.01L12 12.7l-3.6 1.89.69-4.01-2.92-2.85 4.03-.58L12 3.5z" />
        <path d="M12 16.5v4" />
      </>
    ),
    school: (
      <>
        <path d="M3 9.5L12 5l9 4.5-9 4.5-9-4.5z" />
        <path d="M6.5 11.25v4.25c1.45 1.2 3.3 1.85 5.5 1.85s4.05-.65 5.5-1.85v-4.25" />
        <path d="M20 10v5" />
      </>
    ),
    youth: (
      <>
        <path d="M12 4c2.2 2.9 4.9 4.5 8 4.8-.35 5.15-3.08 8.92-8 11.2-4.92-2.28-7.65-6.05-8-11.2C7.1 8.5 9.8 6.9 12 4z" />
        <path d="M9 12.4l2 2 4-4" />
      </>
    ),
  } as const;

  return (
    <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-lotus-pale text-lotus-pink">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {paths[type]}
      </svg>
    </span>
  );
}

const ctimInfo = {
  shortName: 'Cao đẳng CTIM',
  fullName: 'Trường Cao đẳng bán công Công nghệ và Quản trị Doanh nghiệp',
  englishName: 'College of Technology and Industrial Management',
  address:
    'Số 15 Đường Trần Văn Trà, Khu Đô thị mới Nam Thành phố, phường Tân Mỹ, TP. Hồ Chí Minh',
  campus:
    'Khuôn viên 40.000 m² tại khu đô thị mới Nam Thành phố; có ký túc xá, sân thể dục - thể thao, sân banh, khu giải trí, nhà xưởng và phòng thí nghiệm.',
  trainingGoal:
    'Không ngừng nâng cao chất lượng đào tạo, đa dạng hình thức đào tạo, giúp người học tiếp cận kiến thức chuyên môn hiện đại, rèn luyện kỹ năng và phẩm chất đạo đức nghề nghiệp.',
  youthRole:
    'Đoàn Thanh niên Trường Cao đẳng CTIM là tổ chức nòng cốt của thanh niên trong Nhà trường, tập hợp, đoàn kết, giáo dục đoàn viên, sinh viên và tổ chức các phong trào học tập, rèn luyện, tình nguyện.',
  youthBodies: [
    'Ban Tổ chức - Xây dựng: tham mưu công tác tổ chức, quản lý đoàn viên và xây dựng đội ngũ cán bộ Đoàn.',
    'Ban Học tập và Hỗ trợ Sinh viên: hỗ trợ học tập, kỹ năng, định hướng nghề nghiệp và phong trào Sinh viên 5 tốt.',
    'Ban Phong trào: tổ chức hoạt động rèn luyện, sáng tạo, kết nối và phát triển đời sống sinh viên.',
    'Ban Tuyên giáo: tham mưu giáo dục chính trị tư tưởng, truyền thông và định hướng thông tin cho đoàn viên, sinh viên.',
  ],
  partyNotes: [
    'Chi bộ Trường Cao đẳng BC Công nghệ và Quản trị doanh nghiệp có các hoạt động xây dựng Đảng, kết nạp đảng viên, học tập nghị quyết và sinh hoạt chính trị.',
    'Tư liệu CTIM ghi nhận hoạt động dâng hương tưởng niệm Chủ tịch Hồ Chí Minh nhân các dịp kỷ niệm lớn.',
    'Đoàn trường nhiệm kỳ 2025 - 2027 đã ra mắt Ban Chấp hành, tiếp tục vai trò nòng cốt trong phong trào thanh niên CTIM.',
  ],
};

const thoughtTopics: ThoughtTopic[] = [
  {
    id: 'doc-lap',
    title: 'Độc lập dân tộc và khát vọng phát triển',
    description:
      'Gợi mở tinh thần tự chủ, ý chí dựng xây đất nước và trách nhiệm của thế hệ trẻ trong bối cảnh mới.',
    icon: '01',
  },
  {
    id: 'dao-duc',
    title: 'Đạo đức cách mạng',
    description:
      'Nhấn mạnh cần, kiệm, liêm, chính, chí công vô tư; nói đi đôi với làm; đặt lợi ích chung lên trước.',
    icon: '02',
  },
  {
    id: 'doan-ket',
    title: 'Đại đoàn kết toàn dân tộc',
    description:
      'Xem đoàn kết là nguồn sức mạnh căn bản, là điều kiện để quy tụ trí tuệ và hành động vì mục tiêu chung.',
    icon: '03',
  },
  {
    id: 'giao-duc',
    title: 'Văn hóa, giáo dục và con người',
    description:
      'Đề cao học tập suốt đời, giáo dục gắn với thực tiễn, bồi dưỡng cả đức lẫn tài.',
    icon: '04',
  },
  {
    id: 'phong-cach',
    title: 'Phong cách gần dân, giản dị, khoa học',
    description:
      'Thể hiện qua lối sống giản dị, tác phong sâu sát cơ sở, cách diễn đạt ngắn gọn, dễ hiểu.',
    icon: '05',
  },
];

const featuredAreas = [
  {
    sectionId: 'cuoc-doi',
    title: 'Cuộc đời và sự nghiệp',
    description:
      'Đi theo các địa điểm và mốc lịch sử: quê hương Kim Liên, trường Dục Thanh, Bến Nhà Rồng, hành trình cứu nước, 48 Hàng Ngang và Quảng trường Ba Đình.',
  },
  {
    sectionId: 'tu-tuong',
    title: 'Tư tưởng giáo dục, đạo đức, y tế',
    description:
      'Chuyển các chủ đề học tập thành bài học ngắn, câu hỏi tương tác và gợi ý hành động cho sinh viên, đoàn viên hôm nay.',
  },
  {
    sectionId: 'tac-pham',
    title: 'Tác phẩm và tư liệu',
    description:
      'Thư viện văn kiện, chính luận, thơ, báo chí; mỗi tác phẩm có bối cảnh, giá trị nội dung và liên kết với timeline.',
  },
  {
    sectionId: 'am-nhac',
    title: 'Các ca khúc về Bác',
    description:
      'Playlist theo chủ đề thiếu nhi, thanh niên, chiến thắng, quê hương, lăng Bác; có thể phát triển thành hoạt động nghe nhạc và đố vui.',
  },
  {
    sectionId: 'tuong-dai',
    title: 'Tượng đài trên thế giới',
    description:
      'Bản đồ di sản quốc tế cho thấy hình ảnh Hồ Chí Minh trong tình hữu nghị giữa Việt Nam và bạn bè năm châu.',
  },
  {
    sectionId: 'cau-chuyen',
    title: 'Những mẩu chuyện về Bác',
    description:
      'Các câu chuyện ngắn được tổ chức theo bài học đạo đức, câu hỏi suy ngẫm và liên hệ với việc học tập, rèn luyện trong nhà trường.',
  },
];

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Theo tư tưởng Hồ Chí Minh, giáo dục cần hướng tới điều gì?',
    options: [
      'Chỉ truyền đạt kiến thức lý thuyết',
      'Bồi dưỡng con người phát triển cả đức và tài',
      'Tách rời nhà trường khỏi đời sống xã hội',
      'Chỉ phục vụ thi cử',
    ],
    correctIndex: 1,
    explanation:
      'Giáo dục cần bồi dưỡng con người toàn diện, gắn tri thức với đạo đức, trách nhiệm và năng lực hành động.',
    topic: 'Giáo dục',
  },
  {
    id: 2,
    question: 'Nguyên lý học tập nào phù hợp với tinh thần gắn lý luận với thực tiễn?',
    options: [
      'Học đi đôi với hành',
      'Học thuộc lòng là đủ',
      'Chỉ học khi cần bằng cấp',
      'Lý luận không cần kiểm nghiệm',
    ],
    correctIndex: 0,
    explanation:
      'Học đi đôi với hành giúp tri thức trở thành năng lực giải quyết vấn đề thật trong đời sống.',
    topic: 'Phương pháp học tập',
  },
  {
    id: 3,
    question: 'Quan hệ giữa đức và tài nên được hiểu thế nào?',
    options: [
      'Có tài là đủ',
      'Có đức là không cần học thêm',
      'Đức là gốc, tài là điều kiện để phụng sự hiệu quả',
      'Đức và tài không liên quan đến nhau',
    ],
    correctIndex: 2,
    explanation:
      'Đức giúp định hướng mục tiêu đúng, tài giúp biến mục tiêu ấy thành kết quả có ích cho cộng đồng.',
    topic: 'Đạo đức',
  },
  {
    id: 4,
    question: 'Tinh thần “Lương y như từ mẫu” nhấn mạnh phẩm chất nào?',
    options: [
      'Sự tận tâm, nhân ái và trách nhiệm với người bệnh',
      'Chỉ quan tâm kỹ thuật chuyên môn',
      'Làm việc nhanh hơn là làm việc đúng',
      'Đặt hình thức lên trên hiệu quả',
    ],
    correctIndex: 0,
    explanation:
      'Với ngành y và các ngành phục vụ con người, chuyên môn cần đi cùng lòng nhân ái và trách nhiệm.',
    topic: 'Y đức',
  },
  {
    id: 5,
    question: 'Học tập suốt đời phản ánh tinh thần nào?',
    options: [
      'Chỉ học trong nhà trường',
      'Ngừng học khi đã đi làm',
      'Tự học, tự rèn để hoàn thiện bản thân và phục vụ xã hội',
      'Học để đối phó',
    ],
    correctIndex: 2,
    explanation:
      'Tự học, học thường xuyên và học từ thực tiễn là cách mỗi người tiếp tục trưởng thành.',
    topic: 'Học tập suốt đời',
  },
];

const works: Work[] = [
  {
    id: 'ban-an-che-do-thuc-dan-phap',
    title: 'Bản án chế độ thực dân Pháp',
    year: 1925,
    type: 'chinh-luan',
    typeLabel: 'Chính luận',
    summary:
      'Tác phẩm tố cáo bản chất áp bức của chủ nghĩa thực dân và khơi dậy tinh thần đấu tranh giải phóng dân tộc.',
    focusPoints: [
      'Bối cảnh Nguyễn Ái Quốc hoạt động ở Pháp và viết báo về vấn đề thuộc địa.',
      'Giá trị tố cáo chủ nghĩa thực dân trên các mặt chính trị, kinh tế, văn hóa, xã hội.',
      'Ý nghĩa chuẩn bị tư tưởng cho phong trào cách mạng Việt Nam.',
    ],
    sourceNote:
      'Repo đã có file nội dung riêng: tac-pham-ban-an-che-do-thuc-dan-phap.md.',
    hasContent: true,
  },
  {
    id: 'duong-kach-menh',
    title: 'Đường Kách mệnh',
    year: 1927,
    type: 'chinh-luan',
    typeLabel: 'Chính luận',
    summary:
      'Tập hợp các bài giảng huấn luyện cán bộ, đặt nền tảng tư tưởng và tổ chức cho cách mạng Việt Nam.',
    focusPoints: [
      'Có thể trình bày như một “sổ tay nhập môn cách mạng” dành cho cán bộ trẻ.',
      'Nên nối với mốc Quảng Châu, Hội Việt Nam Cách mạng Thanh niên và báo Thanh niên.',
      'Phù hợp làm bài đọc ngắn về lý tưởng, tổ chức và kỷ luật cách mạng.',
    ],
    sourceNote:
      'Khi mở trang chi tiết, nên đối chiếu thêm bản văn và nguồn chính thống để chuẩn hóa trích dẫn.',
    hasContent: true,
  },
  {
    id: 'nhat-ky-trong-tu',
    title: 'Nhật ký trong tù',
    year: 1943,
    type: 'tho',
    typeLabel: 'Thơ',
    summary:
      'Tập thơ chữ Hán ghi lại nghị lực, tâm hồn nhân văn và tinh thần lạc quan trong hoàn cảnh lao tù.',
    focusPoints: [
      'Nên giới thiệu theo góc nhìn văn học: hoàn cảnh sáng tác, tinh thần vượt khó, chất thép và chất tình.',
      'Có thể chọn một vài bài đã được phép trích dẫn ngắn để minh họa, tránh chép dài.',
      'Liên kết với mốc 1942-1943 trong timeline.',
    ],
    sourceNote: 'Có thể tách riêng nhóm thơ trong thư viện tác phẩm.',
    hasContent: true,
  },
  {
    id: 'tuyen-ngon-doc-lap',
    title: 'Tuyên ngôn Độc lập',
    year: 1945,
    type: 'van-kien',
    typeLabel: 'Văn kiện',
    summary:
      'Văn kiện khai sinh nước Việt Nam Dân chủ Cộng hòa, khẳng định quyền độc lập, tự do của dân tộc Việt Nam.',
    focusPoints: [
      'Bối cảnh soạn thảo tại 48 Hàng Ngang và đọc tại Quảng trường Ba Đình.',
      'Giá trị pháp lý, chính trị và tinh thần về quyền độc lập, tự do.',
      'Nên làm trang chi tiết dạng “văn kiện - bối cảnh - ý nghĩa - địa điểm”.',
    ],
    sourceNote: 'Nối trực tiếp với mốc 02/09/1945 và địa điểm Ba Đình.',
    hasContent: true,
  },
  {
    id: 'loi-keu-goi-toan-quoc-khang-chien',
    title: 'Lời kêu gọi toàn quốc kháng chiến',
    year: 1946,
    type: 'van-kien',
    typeLabel: 'Văn kiện',
    summary:
      'Lời hiệu triệu toàn dân đoàn kết, kiên quyết bảo vệ nền độc lập trước cuộc xâm lược trở lại.',
    focusPoints: [
      'Bối cảnh cuối năm 1946 khi nền độc lập non trẻ đứng trước nguy cơ xâm lược trở lại.',
      'Tinh thần kháng chiến toàn dân, toàn diện, lâu dài.',
      'Có thể đặt cạnh audio/video tư liệu để tạo trải nghiệm nghe - đọc.',
    ],
    sourceNote:
      'Repo đã có file nội dung riêng: tac-pham-loi-keu-goi-toan-quoc-khang-chien.md.',
    hasContent: true,
  },
  {
    id: 'sua-doi-loi-lam-viec',
    title: 'Sửa đổi lối làm việc',
    year: 1947,
    type: 'chinh-luan',
    typeLabel: 'Chính luận',
    summary:
      'Tác phẩm bàn về xây dựng Đảng, chống bệnh chủ quan, hình thức, quan liêu và nâng cao tác phong cán bộ.',
    focusPoints: [
      'Phù hợp với chuyên đề rèn luyện tác phong cán bộ, đảng viên, đoàn viên.',
      'Có thể chuyển thành checklist tự đánh giá: nói đi đôi với làm, chống hình thức, gần dân.',
      'Nên liên hệ với hoạt động sinh hoạt chuyên đề của đơn vị.',
    ],
    sourceNote: 'Repo đã có file nội dung riêng: tac-pham-sua-doi-loi-lam-viec.md.',
    hasContent: true,
  },
  {
    id: 'dan-van',
    title: 'Dân vận',
    year: 1949,
    type: 'bao-chi',
    typeLabel: 'Báo chí',
    summary:
      'Bài viết nêu rõ vai trò của dân vận và yêu cầu cán bộ phải gần dân, hiểu dân, làm việc vì dân.',
    focusPoints: [
      'Trục nội dung chính: dân là gốc, việc dân vận là trách nhiệm của cả hệ thống.',
      'Có thể liên hệ hoạt động tình nguyện, khảo sát nhu cầu cộng đồng và phục vụ nhân dân.',
      'Phù hợp đặt chung với nhóm “phong cách gần dân”.',
    ],
    sourceNote: 'Nên bổ sung nguồn văn bản chuẩn và ngày đăng khi làm trang chi tiết.',
    hasContent: true,
  },
  {
    id: 'dao-duc-cach-mang',
    title: 'Đạo đức cách mạng',
    year: 1958,
    type: 'chinh-luan',
    typeLabel: 'Chính luận',
    summary:
      'Nêu bật yêu cầu rèn luyện đạo đức của người cách mạng, chống chủ nghĩa cá nhân.',
    focusPoints: [
      'Có thể phát triển thành bài học ngắn về cần, kiệm, liêm, chính, chí công vô tư.',
      'Nên kèm câu hỏi tự soi chiếu cho sinh viên và đoàn viên.',
      'Liên kết tốt với phần quiz tư tưởng, đạo đức, phong cách.',
    ],
    sourceNote: 'Nên đối chiếu nguồn chính thống trước khi đăng trích đoạn.',
    hasContent: true,
  },
  {
    id: 'di-chuc',
    title: 'Di chúc',
    year: 1969,
    type: 'van-kien',
    typeLabel: 'Văn kiện',
    summary:
      'Văn kiện kết tinh tư tưởng, tình cảm và căn dặn của Chủ tịch Hồ Chí Minh đối với Đảng, nhân dân và thế hệ trẻ.',
    focusPoints: [
      'Nhấn mạnh các căn dặn về xây dựng Đảng, chăm lo nhân dân, bồi dưỡng thế hệ trẻ.',
      'Có thể thiết kế như “lời căn dặn hôm nay”: mỗi ý gắn với một hành động cụ thể.',
      'Phù hợp làm phần kết trang hoặc không gian suy ngẫm.',
    ],
    sourceNote: 'Nên có trang chi tiết riêng với nguồn kiểm chứng rõ ràng.',
    hasContent: true,
  },
  {
    id: 'pac-po-hung-vi',
    title: 'Pác Bó hùng vĩ',
    year: 1941,
    type: 'tho',
    typeLabel: 'Thơ',
    summary:
      'Bài thơ gắn với không gian Pác Bó, thể hiện tinh thần ung dung, niềm tin và khí thế cách mạng trong giai đoạn trở về Tổ quốc.',
    focusPoints: [
      'Nối với mốc 28/01/1941 và địa điểm Pác Bó trong hành trình cách mạng.',
      'Có thể giới thiệu cảnh quan, hang Cốc Bó, suối Lê-nin, núi Các Mác như một trạm tham quan ảo.',
      'Repo đã có file tac-pham-pac-po-hung-vi.md để phát triển tiếp.',
    ],
    sourceNote: 'Nên dùng trích đoạn ngắn, có nguồn và chú thích.',
    hasContent: true,
  },
  {
    id: 'doi-nguyet',
    title: 'Đối nguyệt',
    year: 1942,
    type: 'tho',
    typeLabel: 'Thơ',
    summary:
      'Một bài thơ trong mạch Nhật ký trong tù, gợi vẻ đẹp tâm hồn, phong thái bình thản và chất thơ của Hồ Chí Minh trong hoàn cảnh thử thách.',
    focusPoints: [
      'Phù hợp cho phần văn học: chất thép trong cảnh lao tù và chất tình trước thiên nhiên.',
      'Có thể kết hợp phần đọc thơ, cảm nhận ngắn và câu hỏi suy ngẫm.',
      'Repo đã có file tac-pham-doi-nguyet.md.',
    ],
    sourceNote: 'Không nên chép toàn văn dài nếu chưa kiểm tra bản quyền/nguồn.',
    hasContent: true,
  },
  {
    id: 'pari',
    title: 'Pari',
    year: 1922,
    type: 'tho',
    typeLabel: 'Thơ',
    summary:
      'Tác phẩm gắn với thời kỳ hoạt động ở Pháp, có thể dùng để mở rộng góc nhìn về Nguyễn Ái Quốc trong đời sống chính trị, báo chí và văn hóa tại Paris.',
    focusPoints: [
      'Kết nối với mốc hoạt động ở Pháp, báo Le Paria và Hội Liên hiệp các dân tộc thuộc địa.',
      'Có thể làm một thẻ “Paris trong hành trình tìm đường cứu nước”.',
      'Repo đã có file tac-pham-pari.md.',
    ],
    sourceNote: 'Cần kiểm chứng năm và văn bản khi xuất bản trang chi tiết.',
    hasContent: true,
  },
];

const songs: Song[] = [
  {
    order: 1,
    title: 'Ai yêu Bác Hồ Chí Minh hơn thiếu niên nhi đồng',
    creator: 'Phong Nhã',
    performer: 'Tốp ca thiếu nhi',
    context:
      'Bài hát gần gũi với thiếu nhi, phù hợp làm điểm mở đầu cho khu vực âm nhạc và giáo dục tình cảm kính yêu Bác.',
    theme: 'Thiếu nhi',
    youtubeId: '_B-GCQuH6O0',
  },
  {
    order: 2,
    title: 'Tuổi trẻ thế hệ Bác Hồ',
    creator: 'Triều Dâng',
    performer: 'Tùng Dương',
    context:
      'Gợi tinh thần thanh niên sống có lý tưởng, học tập, rèn luyện và tiếp nối con đường mà Bác Hồ đã lựa chọn.',
    theme: 'Thanh niên',
    youtubeId: 'ZpCjyf99fq0',
  },
  {
    order: 3,
    title: 'Như có Bác Hồ trong ngày vui đại thắng',
    creator: 'Phạm Tuyên',
    performer: 'Tốp ca Nhạc viện TP.HCM',
    context:
      'Ca khúc gắn với niềm vui chiến thắng, thống nhất đất nước; rất phù hợp cho mốc 1975 trong timeline.',
    theme: 'Đại thắng mùa xuân',
    youtubeId: 'HFSCN9RadB8',
  },
  {
    order: 4,
    title: 'Bác đang cùng chúng cháu hành quân',
    creator: 'Huy Thục',
    performer: 'Tốp ca nam Trường Đại học Văn hóa Nghệ thuật Quân đội',
    context:
      'Bài hát thể hiện hình ảnh Bác như nguồn động viên tinh thần trên mỗi chặng đường chiến đấu và xây dựng.',
    theme: 'Người lính',
    youtubeId: '6ZLlLhHRg48',
  },
  {
    order: 5,
    title: 'Ca ngợi Hồ Chủ tịch',
    creator: 'Văn Cao',
    performer: 'Trọng Tấn',
    context:
      'Một ca khúc trang trọng, phù hợp đặt trong phần mở đầu hoặc phần nghi thức của không gian văn hóa.',
    theme: 'Ca ngợi lãnh tụ',
    youtubeId: 'ING9CrBNSls',
  },
  {
    order: 6,
    title: 'Viếng lăng Bác',
    creator: 'Hoàng Hiệp',
    performer: 'Trọng Tấn',
    poemBy: 'Viễn Phương',
    context:
      'Bài hát phổ thơ Viễn Phương, có sắc thái trữ tình và thành kính, phù hợp cho phần cảm nhận, tưởng niệm.',
    theme: 'Lăng Bác',
    youtubeId: 'UDE84LYR_vw',
  },
  {
    order: 7,
    title: 'Đêm qua em mơ gặp Bác Hồ',
    creator: 'Xuân Giao',
    performer: 'Candy Ngọc Hà',
    context:
      'Ca khúc thiếu nhi giàu hình ảnh, có thể dùng trong hoạt động nghe nhạc - trả lời câu hỏi cho học sinh, sinh viên.',
    theme: 'Thiếu nhi',
    youtubeId: 'qB3nnq8fEAU',
  },
  {
    order: 8,
    title: 'Miền Trung nhớ Bác',
    creator: 'Phạm Minh Tuấn',
    performer: 'NSND Thu Hiền',
    context:
      'Gợi tình cảm của đồng bào miền Trung với Bác, có thể kết nối với quê hương Nghệ An và hành trình tuổi trẻ của Người.',
    theme: 'Quê hương và tình cảm nhân dân',
    youtubeId: 'msowOeJ8i50',
  },
  {
    order: 9,
    title: 'Dấu chân phía trước',
    creator: 'Phạm Minh Tuấn',
    performer: 'Vũ Thắng Lợi',
    context:
      'Ca khúc phù hợp với chủ đề thanh niên tiếp bước, dấn thân và tự rèn luyện theo lý tưởng của Bác.',
    theme: 'Lý tưởng thanh niên',
    youtubeId: 'F8dkIxK8Sq4',
  },
];

const monuments: Monument[] = [
  {
    id: 'russia-moscow',
    country: 'Liên bang Nga',
    region: 'chau-au',
    regionLabel: 'Châu Âu',
    city: 'Moscow',
    imagePath: '/assets/images/monuments/russia-moscow.jpg',
  },
  {
    id: 'france-montreuil',
    country: 'Pháp',
    region: 'chau-au',
    regionLabel: 'Châu Âu',
    city: 'Montreuil',
    imagePath: '/assets/images/monuments/france-montreuil.jpg',
  },
  {
    id: 'cuba-havana',
    country: 'Cuba',
    region: 'chau-my',
    regionLabel: 'Châu Mỹ',
    city: 'La Habana',
    imagePath: '/assets/images/monuments/cuba-havana.jpg',
  },
  {
    id: 'mexico-mexico-city',
    country: 'Mexico',
    region: 'chau-my',
    regionLabel: 'Châu Mỹ',
    city: 'Mexico City',
    imagePath: '/assets/images/monuments/mexico-mexico-city.jpg',
  },
  {
    id: 'india-kolkata',
    country: 'Ấn Độ',
    region: 'chau-a',
    regionLabel: 'Châu Á',
    city: 'Kolkata',
    imagePath: '/assets/images/monuments/india-kolkata.jpg',
  },
  {
    id: 'madagascar-antananarivo',
    country: 'Madagascar',
    region: 'chau-phi',
    regionLabel: 'Châu Phi',
    city: 'Antananarivo',
    imagePath: '/assets/images/monuments/madagascar-antananarivo.jpg',
  },
  {
    id: 'thailand',
    country: 'Thái Lan',
    region: 'chau-a',
    regionLabel: 'Châu Á',
    imagePath: '/assets/images/monuments/thailand.jpg',
  },
  {
    id: 'china',
    country: 'Trung Quốc',
    region: 'chau-a',
    regionLabel: 'Châu Á',
    imagePath: '/assets/images/monuments/china.jpg',
  },
  {
    id: 'japan',
    country: 'Nhật Bản',
    region: 'chau-a',
    regionLabel: 'Châu Á',
    imagePath: '/assets/images/monuments/japan.jpg',
  },
  {
    id: 'sri-lanka',
    country: 'Sri Lanka',
    region: 'chau-a',
    regionLabel: 'Châu Á',
    imagePath: '/assets/images/monuments/sri-lanka.jpg',
  },
  {
    id: 'hungary',
    country: 'Hungary',
    region: 'chau-au',
    regionLabel: 'Châu Âu',
    imagePath: '/assets/images/monuments/hungary.jpg',
  },
  {
    id: 'slovakia',
    country: 'Slovakia',
    region: 'chau-au',
    regionLabel: 'Châu Âu',
    imagePath: '/assets/images/monuments/slovakia.jpg',
  },
  {
    id: 'uk',
    country: 'Anh',
    region: 'chau-au',
    regionLabel: 'Châu Âu',
    imagePath: '/assets/images/monuments/uk.jpg',
  },
  {
    id: 'argentina',
    country: 'Argentina',
    region: 'chau-my',
    regionLabel: 'Châu Mỹ',
    imagePath: '/assets/images/monuments/argentina.jpg',
  },
  {
    id: 'chile',
    country: 'Chile',
    region: 'chau-my',
    regionLabel: 'Châu Mỹ',
    imagePath: '/assets/images/monuments/chile.jpg',
  },
  {
    id: 'usa',
    country: 'Hoa Kỳ',
    region: 'chau-my',
    regionLabel: 'Châu Mỹ',
    imagePath: '/assets/images/monuments/usa.jpg',
  },
  {
    id: 'algeria',
    country: 'Algeria',
    region: 'chau-phi',
    regionLabel: 'Châu Phi',
    imagePath: '/assets/images/monuments/algeria.jpg',
  },
  {
    id: 'angola',
    country: 'Angola',
    region: 'chau-phi',
    regionLabel: 'Châu Phi',
    imagePath: '/assets/images/monuments/angola.jpg',
  },
];

const stories: Story[] = [
  {
    id: 'bac-ho-va-nguoi-thay-thuoc',
    title: 'Bác Hồ và những lời căn dặn đối với người thầy thuốc',
    summary:
      'Nhóm câu chuyện và lời căn dặn thể hiện tư tưởng coi người bệnh là trung tâm, đề cao y đức và trách nhiệm phục vụ nhân dân.',
    topics: ['Y đức', 'Ngành y', 'Phục vụ nhân dân'],
    lesson:
      'Người thầy thuốc cần giỏi chuyên môn, giàu lòng nhân ái, biết đoàn kết và luôn đặt sức khỏe, tính mạng của người bệnh lên trên hết.',
    reflectionQuestion:
      'Nếu học hoặc làm trong ngành chăm sóc con người, bạn sẽ biến tinh thần “lương y như từ mẫu” thành hành động cụ thể nào?',
    fullContent:
      'Phần này có thể triển khai như một trạm đọc ngắn về tư tưởng Hồ Chí Minh đối với y tế: tận tâm với người bệnh, rèn luyện đạo đức nghề nghiệp, chống thái độ vô cảm, xây dựng tinh thần đoàn kết trong tập thể y bác sĩ. Nội dung phù hợp với nhóm câu hỏi về giáo dục, y đức và trách nhiệm xã hội.',
  },
  {
    id: 'phai-cham-chi-hoc-tap',
    title: 'Phải chăm chỉ học tập',
    summary:
      'Câu chuyện nhấn mạnh việc học để hiểu biết, để làm việc tốt hơn và để phục vụ nhân dân, không học hình thức hay đối phó.',
    topics: ['Học tập', 'Tự rèn luyện', 'Phục vụ'],
    lesson:
      'Học tập là nhiệm vụ lâu dài. Cán bộ, đoàn viên, sinh viên càng muốn phụng sự tốt càng phải tự học, tự sửa mình và không giấu dốt.',
    reflectionQuestion:
      'Bạn đang học điều gì không phải để lấy điểm, mà để làm việc tốt hơn cho tập thể?',
    fullContent:
      'Nên trình bày câu chuyện theo dạng “bài học 1 phút”: mở bằng một tình huống gần gũi trong học tập, tiếp đến là lời nhắc về tinh thần chăm chỉ, cuối cùng là câu hỏi tự đánh giá. Phần này rất hợp để đặt cạnh khu vực quiz và chủ đề học tập suốt đời.',
  },
  {
    id: 'thoi-gian-quy-bau-lam',
    title: 'Thời gian quý báu lắm',
    summary:
      'Câu chuyện gợi bài học về đúng giờ, giữ lời hẹn, tôn trọng thời gian của tập thể và rèn luyện kỷ luật cá nhân.',
    topics: ['Kỷ luật', 'Đúng giờ', 'Tôn trọng tập thể'],
    lesson:
      'Tôn trọng thời gian là tôn trọng con người. Một tập thể làm việc tốt bắt đầu từ thói quen chuẩn bị đúng giờ, đúng việc.',
    reflectionQuestion:
      'Trong sinh hoạt lớp, họp nhóm hoặc hoạt động Đoàn, bạn có thể thay đổi thói quen nào để không làm mất thời gian của người khác?',
    fullContent:
      'Có thể biến câu chuyện này thành một thẻ cam kết nhỏ: đúng giờ trong học tập, đúng hẹn trong công việc, chuẩn bị trước khi tham gia hoạt động chung. Đây là nội dung dễ liên hệ với tác phong chuyên nghiệp của sinh viên và đoàn viên.',
  },
  {
    id: 'doi-ban-tay',
    title: 'Đôi bàn tay',
    summary:
      'Câu chuyện gợi tinh thần tự lực, dám nghĩ, dám đi, dám làm của người thanh niên Nguyễn Tất Thành trên hành trình tìm đường cứu nước.',
    topics: ['Tự lực', 'Ý chí', 'Lao động'],
    lesson:
      'Hoài bão lớn cần bắt đầu bằng hành động cụ thể. Đôi bàn tay lao động tượng trưng cho ý chí tự thân và niềm tin vào con đường mình chọn.',
    reflectionQuestion:
      'Nếu phải bắt đầu một việc lớn bằng nguồn lực rất nhỏ, “đôi bàn tay” của bạn hôm nay là kỹ năng hay phẩm chất nào?',
    fullContent:
      'Nội dung nên liên kết trực tiếp với mốc 05/06/1911 tại Bến Nhà Rồng. Thay vì chỉ kể lại sự kiện, trang có thể đặt câu hỏi về bản lĩnh tuổi trẻ: khi chưa có đủ điều kiện, người trẻ vẫn có thể bắt đầu bằng lao động, tự học và ý chí đi đến cùng với mục tiêu đúng đắn.',
  },
  {
    id: 'bac-ho-voi-tinh-than-tu-hoc',
    title: 'Bác Hồ với tinh thần tự học',
    summary:
      'Câu chuyện nhấn mạnh năng lực tự học ngoại ngữ, viết báo, quan sát đời sống và học trong mọi hoàn cảnh của Chủ tịch Hồ Chí Minh.',
    topics: ['Tự học', 'Ngoại ngữ', 'Học suốt đời'],
    lesson:
      'Tự học là con đường phát triển bền vững. Khi biết học từ sách, từ lao động, từ nhân dân và từ thực tiễn, mỗi người sẽ lớn lên liên tục.',
    reflectionQuestion:
      'Bạn có thể thiết kế một kế hoạch tự học 30 ngày nào để nâng năng lực thật của mình?',
    fullContent:
      'Phần này có thể phát triển thành một “góc tự học”: gợi ý sổ tay tự học, mục tiêu nhỏ mỗi ngày, cách ghi chép điều quan sát được và cách biến tri thức thành hành động. Đây là cầu nối tốt giữa tư tưởng giáo dục của Bác và đời sống sinh viên hiện nay.',
  },
];

const roleModelActivities = [
  {
    title: 'Lễ tổng kết công tác Đoàn và phong trào thanh niên năm học 2024-2025',
    year: '2024-2025',
    description:
      'Hoạt động tổng kết là chất liệu tốt để ghi nhận kết quả phong trào, tuyên dương tập thể/cá nhân tiêu biểu và rút ra bài học tổ chức hoạt động thanh niên.',
    imagePath: '/assets/images/role-models/tong-ket-cong-tac-doan-2024-2025.jpg',
  },
  {
    title: 'Tháng Thanh niên 2026 - Chủ nhật xanh',
    year: '2026',
    description:
      'Có thể đặt trong nhóm hoạt động tình nguyện, môi trường, xây dựng nếp sống đẹp; liên hệ với tinh thần lao động, trách nhiệm cộng đồng và làm việc thiết thực.',
    imagePath: '/assets/images/role-models/chu-nhat-xanh-2026.jpg',
  },
  {
    title: 'Tháng Thanh niên 2026 - Hành trình về nguồn',
    year: '2026',
    description:
      'Phù hợp với tinh thần của Không gian Văn hóa Hồ Chí Minh: đưa đoàn viên, sinh viên trở về với địa chỉ đỏ, lịch sử, truyền thống và bài học trách nhiệm hôm nay.',
    imagePath: '/assets/images/role-models/hanh-trinh-ve-nguon-2026.jpg',
  },
  {
    title: 'Chiến dịch Xuân tình nguyện 2026',
    year: '2026',
    description:
      'Các hoạt động văn nghệ mừng Đảng - mừng Xuân, tổng kết chiến dịch và lan tỏa yêu thương có thể trở thành tư liệu sống cho phần “làm theo Bác”.',
    imagePath: '/assets/images/role-models/xuan-tinh-nguyen-2026.jpg',
  },
  {
    title: 'Ra mắt Ban Chấp hành Đoàn TNCS Hồ Chí Minh Trường Cao đẳng CTIM, nhiệm kỳ 2025 - 2027',
    year: '2025-2027',
    description:
      'Nên dùng để giới thiệu lực lượng nòng cốt dẫn dắt phong trào thanh niên CTIM, đồng hành với đoàn viên trong học tập, rèn luyện và phát triển bản sắc sinh viên CTIM.',
    imagePath: '/assets/images/role-models/bch-doan-ctim-2025-2027.jpg',
  },
  {
    title: 'Lễ kết nạp Đảng viên mới',
    year: 'Chi bộ',
    description:
      'Tư liệu Chi bộ về kết nạp đảng viên mới giúp kết nối công tác xây dựng Đảng với quá trình bồi dưỡng lý tưởng, rèn luyện bản lĩnh chính trị cho quần chúng ưu tú.',
    imagePath: '/assets/images/role-models/ket-nap-dang-vien-moi.jpg',
  },
  {
    title: 'CTIM dâng hương tưởng niệm Chủ tịch Hồ Chí Minh',
    year: '19/05',
    description:
      'Hoạt động dâng hương nhân dịp kỷ niệm ngày sinh Chủ tịch Hồ Chí Minh là chất liệu trực tiếp cho không gian tưởng niệm, giáo dục truyền thống và tri ân.',
    imagePath: '/assets/images/role-models/dang-huong-chu-tich-ho-chi-minh.jpg',
  },
];

const timelineTabs = timelineData.map((period) => ({
  id: period.periodId,
  label: period.periodTitle,
}));

const timelineImageByDate: Record<string, string> = {
  '1890-05-19': '/assets/images/timeline/1890-lang-sen-kim-lien.jpg',
  '1911-06-03': '/assets/images/timeline/1911-nhan-the-tau-van-ba.jpg',
  '1911-06-05': '/assets/images/timeline/1911-cang-nha-rong-ra-di-tim-duong-cuu-nuoc.jpg',
  '1912/1917': '/assets/images/timeline/1912-1917-hanh-trinh-bon-ba-the-gioi.jpg',
  '1917': '/assets/images/timeline/1917-nguyen-ai-quoc-tai-phap.jpg',
  '1919': '/assets/images/timeline/1919-ban-yeu-sach-nhan-dan-an-nam.jpg',
  '1920-12': '/assets/images/timeline/1920-dai-hoi-tours.jpg',
  '1921/1922': '/assets/images/timeline/1921-bao-nguoi-cung-kho.jpg',
  '1923-06': '/assets/images/timeline/1923-nguyen-ai-quoc-tai-lien-xo.jpg',
  '1924-11': '/assets/images/timeline/1924-nguyen-ai-quoc-tai-quang-chau.jpg',
  '1925': '/assets/images/timeline/1925-hoi-viet-nam-cach-mang-thanh-nien.jpg',
  '1930-02': '/assets/images/timeline/1930-hoi-nghi-thanh-lap-dang.jpg',
  '1931/1933': '/assets/images/timeline/1931-1933-nguyen-ai-quoc-tai-hong-kong.jpg',
  '1941-01-28': '/assets/images/timeline/1941-pac-bo-cao-bang.jpg',
  '1941-05': '/assets/images/timeline/1941-hoi-nghi-trung-uong-8-viet-minh.jpg',
  '1942/1943': '/assets/images/timeline/1942-1943-nhat-ky-trong-tu.jpg',
  '1944-12': '/assets/images/timeline/1944-doi-viet-nam-tuyen-truyen-giai-phong-quan.jpg',
  '1945-09-02': '/assets/images/timeline/1945-doc-tuyen-ngon-doc-lap-ba-dinh.jpg',
  '1946-12-19': '/assets/images/timeline/1946-loi-keu-goi-toan-quoc-khang-chien.jpg',
  '1951': '/assets/images/timeline/1951-dai-hoi-dang-lan-2.jpg',
  '1954-05-07': '/assets/images/timeline/1954-chien-thang-dien-bien-phu.jpg',
  '1956-10': '/assets/images/timeline/1956-chu-tich-dang.jpg',
  '1960': '/assets/images/timeline/1960-dai-hoi-dang-lan-3.jpg',
  '1969-09-02': '/assets/images/timeline/1969-di-chuc-ho-chi-minh.jpg',
  '1975': '/assets/images/timeline/1975-chien-dich-ho-chi-minh.jpg',
  '1987/1990': '/assets/images/timeline/1987-1990-unesco-ton-vinh-ho-chi-minh.jpg',
};

function getTimelineImagePath(date: string) {
  return (
    timelineImageByDate[date] ??
    `/assets/images/timeline/${date.replace(/[^0-9a-z]+/gi, '-')}.jpg`
  );
}

const workTabs = [
  { id: 'all', label: 'Tất cả' },
  { id: 'van-kien', label: 'Văn kiện' },
  { id: 'chinh-luan', label: 'Chính luận' },
  { id: 'tho', label: 'Thơ' },
  { id: 'bao-chi', label: 'Báo chí' },
];

const monumentTabs = [
  { id: 'all', label: 'Tất cả' },
  { id: 'chau-a', label: 'Châu Á' },
  { id: 'chau-au', label: 'Châu Âu' },
  { id: 'chau-my', label: 'Châu Mỹ' },
  { id: 'chau-phi', label: 'Châu Phi' },
];

function getYearLabel(year?: number) {
  return year ? String(year) : 'Đang cập nhật';
}

function YouTubeEmbedPlaceholder({ song }: { song: Song }) {
  if (song.youtubeId) {
    return (
      <iframe
        className="-mx-5 -mt-5 mb-5 aspect-video w-[calc(100%+2.5rem)] rounded-t-xl border-0"
        src={`https://www.youtube.com/embed/${song.youtubeId}`}
        title={song.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <div className="-mx-5 -mt-5 mb-5 aspect-video rounded-t-xl bg-gradient-to-br from-red-formal/10 via-lotus-pale to-ivory p-5">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-formal text-white shadow-sm">
          <svg
            viewBox="0 0 24 24"
            className="ml-1 h-7 w-7"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <p className="mt-4 text-sm font-semibold text-ink">
          Video đang cập nhật
        </p>
        <p className="mt-2 max-w-xs text-xs leading-5 text-gray-sub">
          Nội dung video cho bài “{song.title}” sẽ được bổ sung sau.
        </p>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [timelineFilter, setTimelineFilter] = useState(timelineData[0].periodId);
  const [workFilter, setWorkFilter] = useState('all');
  const [monumentFilter, setMonumentFilter] = useState('all');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});

  const filteredWorks = useMemo(() => {
    if (workFilter === 'all') return works;
    return works.filter((work) => work.type === workFilter);
  }, [workFilter]);

  const filteredMonuments = useMemo(() => {
    if (monumentFilter === 'all') return monuments;
    return monuments.filter((monument) => monument.region === monumentFilter);
  }, [monumentFilter]);

  const answeredCount = Object.keys(quizAnswers).length;
  const correctCount = quizQuestions.filter(
    (question) => quizAnswers[question.id] === question.correctIndex,
  ).length;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTimelinePeriod = (id: string) => {
    setTimelineFilter(id);
    scrollToSection(`timeline-${id}`);
  };

  useEffect(() => {
    const updateActiveTimelinePeriod = () => {
      const readingLine = window.scrollY + (window.innerWidth >= 768 ? 128 : 104);
      let activePeriod = timelineData[0].periodId;

      timelineData.forEach((period) => {
        const section = document.getElementById(`timeline-${period.periodId}`);
        if (section && section.offsetTop <= readingLine) {
          activePeriod = period.periodId;
        }
      });

      setTimelineFilter((current) =>
        current === activePeriod ? current : activePeriod,
      );
    };

    let frameId = window.requestAnimationFrame(updateActiveTimelinePeriod);
    const requestUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveTimelinePeriod);
    };

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, []);

  const setQuizAnswer = (questionId: number, optionIndex: number) => {
    setQuizAnswers((current) => ({ ...current, [questionId]: optionIndex }));
  };

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden bg-gradient-to-br from-lotus-pale via-lotus-light/75 to-white pt-28 pb-16 md:pt-32 md:pb-20"
      >
        <div className="section-container relative z-10 grid min-h-[calc(100vh-8rem)] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge variant="red">Không gian số học tập và lan tỏa</Badge>
            <h1
              className="hero-gradient-title mt-5 max-w-4xl font-heading text-4xl font-black leading-tight md:text-6xl"
              aria-label="Không gian Văn hóa Hồ Chí Minh"
            >
              <span className="hero-gradient-title-stroke" aria-hidden="true">
                Không gian Văn hóa Hồ Chí Minh
              </span>
              <span className="hero-gradient-title-fill" aria-hidden="true">
                Không gian Văn hóa Hồ Chí Minh
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-sub md:text-lg">
              Không gian số giới thiệu cuộc đời, sự nghiệp, tư tưởng, đạo đức
              và phong cách Hồ Chí Minh; kết nối tư liệu lịch sử với hoạt động
              học tập, rèn luyện và làm theo Bác của tuổi trẻ CTIM.
            </p>

            <div className="mt-7 grid gap-3 text-sm leading-7 text-gray-sub">
              <p className="flex gap-3">
                <UnitIcon type="party" />
                <span>{unitInfo.party}</span>
              </p>
              <p className="flex gap-3">
                <UnitIcon type="school" />
                <span>{unitInfo.cell}</span>
              </p>
              <p className="flex gap-3">
                <UnitIcon type="youth" />
                <span>{unitInfo.implementer}</span>
              </p>
            </div>

            <div className="mt-6 rounded-xl border border-gray-border bg-white/75 p-4 text-sm leading-7 text-gray-sub">
              <p className="font-semibold text-ink">{ctimInfo.fullName}</p>
              <p>
                Tên tiếng Anh: {ctimInfo.englishName}. Địa chỉ:{' '}
                {ctimInfo.address}.
              </p>
              <p className="mt-2">{ctimInfo.trainingGoal}</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollToSection('timeline')}
                className="rounded-full bg-lotus-pink px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-red-formal"
              >
                Khám phá dòng thời gian
              </button>
              <button
                onClick={() => scrollToSection('tu-tuong')}
                className="rounded-full border border-lotus-pink/40 bg-white/80 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-lotus-pale"
              >
                Học tập tư tưởng, đạo đức
              </button>
            </div>

            <div className="mt-8">
              <SearchBar placeholder="Tìm nhanh: tác phẩm, câu chuyện, tượng đài..." />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-lotus-pale/70 blur-2xl" />
            <Card className="relative overflow-hidden p-4" hover={false}>
              <ImagePlaceholder
                path="/assets/images/hero/chan-dung-ho-chi-minh.jpg"
                alt="Ảnh chân dung Chủ tịch Hồ Chí Minh hoặc ảnh không gian văn hóa chính"
                aspectRatio="4/5"
                className="rounded-lg"
              />
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-lotus-light p-4">
                  <p className="font-heading text-2xl font-bold text-lotus-pink">
                    1890
                  </p>
                  <p className="mt-1 text-gray-sub">Năm sinh</p>
                </div>
                <div className="rounded-lg bg-leaf-green/10 p-4">
                  <p className="font-heading text-2xl font-bold text-leaf-green">
                    1969
                  </p>
                  <p className="mt-1 text-gray-sub">Di chúc và di sản</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white/80 py-12">
        <div className="section-container">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredAreas.map((area) => (
              <button
                key={area.sectionId}
                onClick={() => scrollToSection(area.sectionId)}
                className="rounded-xl border border-gray-border bg-ivory p-5 text-left transition hover:border-lotus-pink hover:shadow-sm"
              >
                <h2 className="font-heading text-xl font-bold text-ink">
                  {area.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-gray-sub">
                  {area.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <SilkDivider />

      <section className="section-container py-16 md:py-20">
        <SectionTitle
          id="ho-so"
          title="Hồ sơ Chủ tịch Hồ Chí Minh"
          subtitle="Những thông tin khái quát về thân thế, tên gọi, quê hương, vai trò lịch sử và di sản của Chủ tịch Hồ Chí Minh."
        />
        <Card className="mb-6 p-6" hover={false}>
          <p className="text-base leading-8 text-gray-sub">
            Chủ tịch Hồ Chí Minh, tên khai sinh là Nguyễn Sinh Cung, thời
            niên thiếu là Nguyễn Tất Thành, trong hoạt động cách mạng thường
            được biết đến với tên Nguyễn Ái Quốc và về sau là Hồ Chí Minh.
            Người sinh ngày 19/05/1890 tại làng Sen, xã Kim Liên, huyện Nam
            Đàn, tỉnh Nghệ An. Cuộc đời và sự nghiệp của Người gắn với hành
            trình tìm đường cứu nước, sáng lập và rèn luyện Đảng, lãnh đạo
            nhân dân đấu tranh giành độc lập, xây dựng nhà nước mới và để lại
            một di sản tư tưởng, đạo đức, phong cách có giá trị lâu dài.
          </p>
        </Card>
        <div className="mb-6 grid gap-4 md:grid-cols-3">
          <ImagePlaceholder
            path="/assets/images/profile/lang-sen-kim-lien.jpg"
            alt="Ảnh Làng Sen, Kim Liên, Nam Đàn, Nghệ An"
            aspectRatio="16/10"
          />
          <ImagePlaceholder
            path="/assets/images/profile/nguyen-tat-thanh-thoi-tre.jpg"
            alt="Ảnh tư liệu Nguyễn Tất Thành thời trẻ hoặc thời dạy học"
            aspectRatio="16/10"
          />
          <ImagePlaceholder
            path="/assets/images/profile/ho-chi-minh-chan-dung-chinh-thuc.jpg"
            alt="Ảnh chân dung Chủ tịch Hồ Chí Minh dùng trong phần hồ sơ"
            aspectRatio="16/10"
          />
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-6">
            <Badge variant="green">Thông tin cơ bản</Badge>
            <h3 className="mt-4 font-heading text-2xl font-bold">
              {personProfile.primaryName}
            </h3>
            <dl className="mt-5 grid gap-4 text-sm">
              <div>
                <dt className="font-semibold text-ink">Sinh</dt>
                <dd className="mt-1 text-gray-sub">
                  {personProfile.birth.date} tại {personProfile.birth.place}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Từ trần</dt>
                <dd className="mt-1 text-gray-sub">
                  {personProfile.death.date} tại {personProfile.death.place}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-ink">Danh hiệu di sản</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {personProfile.legacyTitles.map((title) => (
                    <Badge key={title} variant="gold">
                      {title}
                    </Badge>
                  ))}
                </dd>
              </div>
            </dl>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="font-heading text-xl font-bold">Tên gọi, bút danh</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {personProfile.names.map((item) => (
                  <span
                    key={`${item.name}-${item.context}`}
                    className="rounded-full border border-gray-border bg-white px-3 py-1 text-xs text-gray-sub"
                    title={item.context}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="font-heading text-xl font-bold">Vai trò nổi bật</h3>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-gray-sub">
                {personProfile.roles.map((role) => (
                  <li key={role} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lotus-pink" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white/60 py-16 md:py-20">
        <div className="section-container">
          <SectionTitle
            id="timeline"
            title="Dòng thời gian cuộc đời và sự nghiệp"
            subtitle="Hành trình từ quê hương Kim Liên, quá trình tìm đường cứu nước, lãnh đạo cách mạng đến những dấu ấn còn tiếp nối trong di sản hôm nay."
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
            <div className="order-2 space-y-14 lg:order-1">
              {timelineData.map((period) => (
                <section
                  key={period.periodId}
                  id={`timeline-${period.periodId}`}
                  className="scroll-mt-28"
                >
                  <div className="mb-8 flex items-center gap-4">
                    <span className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-lotus-pink/35 to-lotus-pink/15 md:block" />
                    <div className="rounded-full border border-lotus-pink/30 bg-ivory px-5 py-2 text-center shadow-sm">
                      <Badge variant="pink">{period.periodId}</Badge>
                      <h3 className="mt-1 font-heading text-lg font-bold md:text-xl">
                        {period.periodTitle}
                      </h3>
                    </div>
                    <span className="hidden h-px flex-1 bg-gradient-to-l from-transparent via-lotus-pink/35 to-lotus-pink/15 md:block" />
                  </div>

                  <div className="relative">
                    <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-lotus-pink/15 via-lotus-pink/45 to-lotus-pink/15 md:left-1/2 md:-translate-x-1/2" />
                    <div className="space-y-6 md:space-y-8">
                      {period.events.map((event, eventIndex) => {
                        const isLeft = eventIndex % 2 === 0;
                        const eventImagePath = getTimelineImagePath(event.date);

                        return (
                          <article
                            key={`${period.periodId}-${event.date}-${event.title}`}
                            className="relative md:grid md:grid-cols-[minmax(0,1fr)_3rem_minmax(0,1fr)] md:gap-4"
                          >
                            <div className="absolute left-5 top-5 z-10 -translate-x-1/2 md:left-1/2">
                              <span className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-lotus-pink font-heading text-xs font-bold text-white shadow-md">
                                {String(eventIndex + 1).padStart(2, '0')}
                              </span>
                            </div>

                            <Card
                              className={`ml-12 p-5 md:ml-0 ${
                                isLeft
                                  ? 'md:col-start-1 md:text-right'
                                  : 'md:col-start-3'
                              }`}
                            >
                              <div
                                className={`flex flex-col gap-2 ${
                                  isLeft
                                    ? 'md:items-end'
                                    : 'md:items-start'
                                }`}
                              >
                                <span className="inline-flex w-fit rounded-full bg-lotus-pale px-3 py-1 font-heading text-xs font-bold text-lotus-pink">
                                  {event.date}
                                </span>
                                <h4 className="font-heading text-lg font-bold leading-snug text-ink">
                                  {event.title}
                                </h4>
                              </div>
                              {event.summary && (
                                <p className="mt-3 text-sm leading-7 text-gray-sub">
                                  {event.summary}
                                </p>
                              )}
                            </Card>

                            <div
                              className={`hidden md:row-start-1 md:block ${
                                isLeft ? 'md:col-start-3' : 'md:col-start-1'
                              }`}
                            >
                              <div className="group relative overflow-hidden rounded-2xl border border-lotus-pink/15 bg-white p-2 shadow-sm transition hover:-translate-y-1 hover:border-lotus-pink/35 hover:shadow-lg">
                                <ImagePlaceholder
                                  path={eventImagePath}
                                  alt={`Ảnh minh họa: ${event.title}`}
                                  aspectRatio="16/10"
                                  className="rounded-xl"
                                />
                              </div>
                            </div>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                </section>
              ))}
            </div>

            <aside className="sticky top-20 z-20 order-1 self-start lg:top-28 lg:order-2">
              <Card className="border-lotus-pink/20 bg-ivory/95 p-3 shadow-md backdrop-blur" hover={false}>
                <p className="px-2 pb-2 font-heading text-sm font-bold text-ink">
                  Chọn giai đoạn
                </p>
                <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
                  {timelineTabs.map((tab) => {
                    const isActive = tab.id === timelineFilter;

                    return (
                      <button
                        key={tab.id}
                        onClick={() => scrollToTimelinePeriod(tab.id)}
                        className={`min-w-fit rounded-full px-4 py-2 text-left text-sm font-medium transition lg:w-full lg:rounded-lg ${
                          isActive
                            ? 'bg-lotus-pink text-white shadow-sm'
                            : 'bg-white text-gray-sub hover:bg-lotus-pale hover:text-ink'
                        }`}
                      >
                        <span className="block text-xs font-heading font-bold text-current/70">
                          {tab.id}
                        </span>
                        <span className="mt-0.5 block">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-container py-16 md:py-20">
        <SectionTitle
          id="cuoc-doi"
          title="Địa điểm và hành trình cách mạng"
          subtitle="Những địa danh gắn với bước đường hoạt động của Người, từ tuổi trẻ yêu nước đến các mốc lịch sử quan trọng của dân tộc."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lifeCareerItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <ImagePlaceholder
                path={item.imagePath}
                alt={`Ảnh tư liệu: ${item.title}`}
                aspectRatio="16/10"
                className="rounded-none"
              />
              <div className="p-5">
                <Badge variant="green">{item.period}</Badge>
                <h3 className="mt-3 font-heading text-xl font-bold">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-sub">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-lotus-pale/45 py-16 md:py-20">
        <DrumPattern className="absolute -left-20 top-10 h-72 w-72" opacity={0.06} />
        <div className="section-container relative z-10">
          <SectionTitle
            id="tu-tuong"
            title="Tư tưởng, đạo đức, phong cách Hồ Chí Minh"
            subtitle="Các chủ đề cốt lõi giúp người học hiểu sâu hơn về giá trị tư tưởng, đạo đức, phong cách của Người và liên hệ với việc rèn luyện hôm nay."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {thoughtTopics.map((topic) => (
              <Card key={topic.id} className="p-5">
                <ImagePlaceholder
                  path={`/assets/images/thought/${topic.id}.jpg`}
                  alt={`Ảnh minh họa chủ đề: ${topic.title}`}
                  aspectRatio="4/3"
                  className="mb-4 rounded-lg"
                />
                <p className="font-heading text-3xl font-bold text-lotus-pink/60">
                  {topic.icon}
                </p>
                <h3 className="mt-3 font-heading text-lg font-bold">
                  {topic.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-sub">
                  {topic.description}
                </p>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6" hover={false}>
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <Badge variant="red">Tương tác học tập</Badge>
                <h3 className="mt-3 font-heading text-2xl font-bold">
                  Bộ câu hỏi nhanh
                </h3>
                <p className="mt-2 text-sm text-gray-sub">
                  Đã trả lời {answeredCount}/{quizQuestions.length}, đúng{' '}
                  {correctCount}/{quizQuestions.length}.
                </p>
              </div>
              <button
                onClick={() => setQuizAnswers({})}
                className="rounded-full border border-gray-border px-4 py-2 text-sm font-medium text-gray-sub transition hover:border-lotus-pink hover:text-ink"
              >
                Làm lại
              </button>
            </div>
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              {quizQuestions.map((question) => {
                const selected = quizAnswers[question.id];
                return (
                  <div
                    key={question.id}
                    className="rounded-xl border border-gray-border bg-white p-5"
                  >
                    <Badge variant="gray">{question.topic}</Badge>
                    <p className="mt-3 font-semibold leading-7">
                      {question.question}
                    </p>
                    <div className="mt-4 grid gap-2">
                      {question.options.map((option, optionIndex) => {
                        const isSelected = selected === optionIndex;
                        const isCorrect =
                          selected !== undefined &&
                          optionIndex === question.correctIndex;
                        const isWrong =
                          isSelected && optionIndex !== question.correctIndex;
                        return (
                          <button
                            key={option}
                            onClick={() =>
                              setQuizAnswer(question.id, optionIndex)
                            }
                            className={`rounded-lg border px-3 py-2 text-left text-sm transition ${
                              isCorrect
                                ? 'border-leaf-green bg-leaf-green/10 text-leaf-green'
                                : isWrong
                                  ? 'border-red-formal bg-red-formal/10 text-red-formal'
                                  : 'border-gray-border hover:border-lotus-pink hover:bg-lotus-pale'
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    {selected !== undefined && (
                      <p className="mt-4 text-sm leading-7 text-gray-sub">
                        {question.explanation}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </section>

      <section className="section-container py-16 md:py-20">
        <SectionTitle
          id="tac-pham"
          title="Tác phẩm và tư liệu tiêu biểu"
          subtitle="Tuyển chọn văn kiện, tác phẩm, bài viết và tư liệu có giá trị trong việc tìm hiểu tư tưởng, sự nghiệp cách mạng của Chủ tịch Hồ Chí Minh."
        />
        <FilterTabs
          tabs={workTabs}
          activeTab={workFilter}
          onTabChange={setWorkFilter}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredWorks.map((work) => (
            <Card key={work.id} className="p-5">
              <ImagePlaceholder
                path={`/assets/images/works/${work.id}.jpg`}
                alt={`Ảnh bìa hoặc tư liệu cho tác phẩm: ${work.title}`}
                aspectRatio="16/10"
                className="-mx-5 -mt-5 mb-5 rounded-b-none"
              />
              <div className="flex items-center justify-between gap-3">
                <Badge variant={work.type === 'van-kien' ? 'red' : 'pink'}>
                  {work.typeLabel}
                </Badge>
                <span className="text-xs font-medium text-gray-sub">
                  {getYearLabel(work.year)}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold">
                {work.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-sub">
                {work.summary}
              </p>
              {work.focusPoints && (
                <ul className="mt-4 space-y-2 text-xs leading-6 text-gray-sub">
                  {work.focusPoints.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-lotus-pink" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-4 text-xs font-medium text-leaf-green">
                {work.sourceNote ??
                  (work.hasContent
                    ? 'Đã có dữ liệu nền để phát triển trang chi tiết.'
                    : 'Đang chuẩn hóa nội dung.')}
              </p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white/70 py-16 md:py-20">
        <div className="section-container">
          <SectionTitle
            id="am-nhac"
            title="Âm nhạc về Chủ tịch Hồ Chí Minh"
            subtitle="Những ca khúc tiêu biểu về Chủ tịch Hồ Chí Minh, được chọn để gợi cảm xúc, bối cảnh lịch sử và tinh thần học tập, làm theo Bác."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {songs.map((song) => (
              <Card key={song.order} className="p-5">
                <YouTubeEmbedPlaceholder song={song} />
                <p className="font-heading text-3xl font-bold text-lotus-pink/50">
                  {String(song.order).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-heading text-xl font-bold">
                  {song.title}
                </h3>
                <p className="mt-3 text-sm text-gray-sub">
                  Sáng tác: <span className="text-ink">{song.creator}</span>
                </p>
                {song.poemBy && (
                  <p className="mt-1 text-sm text-gray-sub">
                    Thơ: <span className="text-ink">{song.poemBy}</span>
                  </p>
                )}
                <p className="mt-1 text-sm text-gray-sub">
                  Trình bày:{' '}
                  <span className="text-ink">{song.performer}</span>
                </p>
                {song.theme && (
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-lotus-pink">
                    {song.theme}
                  </p>
                )}
                {song.context && (
                  <p className="mt-2 text-sm leading-7 text-gray-sub">
                    {song.context}
                  </p>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-16 md:py-20">
        <SectionTitle
          id="tuong-dai"
          title="Tượng đài và không gian tưởng niệm trên thế giới"
          subtitle="Những công trình, không gian tưởng niệm và dấu ấn văn hóa cho thấy tình cảm kính trọng của nhân dân thế giới đối với Chủ tịch Hồ Chí Minh."
        />
        <FilterTabs
          tabs={monumentTabs}
          activeTab={monumentFilter}
          onTabChange={setMonumentFilter}
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredMonuments.map((monument) => (
            <Card key={monument.id} className="overflow-hidden">
              <ImagePlaceholder
                path={monument.imagePath}
                alt={`Ảnh tượng đài hoặc không gian tưởng niệm tại ${monument.country}`}
                aspectRatio="16/10"
                className="rounded-none"
              />
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="gold">{monument.regionLabel}</Badge>
                  {monument.city && (
                    <span className="text-sm font-medium text-gray-sub">
                      {monument.city}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-heading text-xl font-bold">
                  {monument.country}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-lotus-pale/45 py-16 md:py-20">
        <div className="section-container">
          <SectionTitle
            id="cau-chuyen"
            title="Câu chuyện về Bác"
            subtitle="Những câu chuyện đời thường, giản dị mà sâu sắc, gợi mở bài học về lối sống, trách nhiệm, tình thương yêu con người và tinh thần phụng sự."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {stories.map((story) => (
              <Card key={story.id} className="p-5">
                <ImagePlaceholder
                  path={`/assets/images/stories/${story.id}.jpg`}
                  alt={`Ảnh minh họa câu chuyện: ${story.title}`}
                  aspectRatio="16/10"
                  className="-mx-5 -mt-5 mb-5 rounded-b-none"
                />
                <h3 className="font-heading text-xl font-bold">
                  {story.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-sub">
                  {story.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {story.topics.map((topic) => (
                    <Badge key={topic} variant="green">
                      {topic}
                    </Badge>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedStory(story)}
                  className="mt-5 text-sm font-semibold text-lotus-pink transition hover:text-red-formal"
                >
                  Xem bài học và gợi ý triển khai
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-16 md:py-20">
        <SectionTitle
          id="guong-sang"
          title="Gương sáng và hoạt động của đơn vị"
          subtitle="Khu vực dành riêng cho Chi bộ và Đoàn trường: cập nhật hoạt động, hình ảnh, sản phẩm học tập và câu chuyện người thật việc thật."
        />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="p-6">
            <Badge variant="red">Dữ liệu nền CTIM</Badge>
            <h3 className="mt-4 font-heading text-2xl font-bold">
              Từ không gian tư liệu đến không gian hành động tại CTIM
            </h3>
            <p className="mt-4 text-sm leading-7 text-gray-sub">
              {ctimInfo.shortName} có hệ thống Đảng - Đoàn thể gồm Chi bộ,
              Công đoàn và Đoàn Thanh niên. Trong đó, Đoàn Thanh niên giữ vai
              trò tập hợp, đoàn kết, giáo dục đoàn viên, sinh viên; đồng thời
              tổ chức các phong trào học tập, rèn luyện, tình nguyện và đồng
              hành với thanh niên trong Nhà trường.
            </p>
            <ImagePlaceholder
              path="/assets/images/ctim/khuon-vien-ctim-tran-van-tra.jpg"
              alt="Ảnh khuôn viên Trường Cao đẳng CTIM tại đường Trần Văn Trà"
              aspectRatio="16/10"
              className="mt-5"
            />
            <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-sub">
              {ctimInfo.youthBodies.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lotus-pink" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl bg-lotus-light p-4">
              <h4 className="font-heading text-lg font-bold text-ink">
                Gợi ý kết nối nội dung
              </h4>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-sub">
                {ctimInfo.partyNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-sub">
              <li>Hoạt động học tập chuyên đề của Chi bộ và Đoàn trường.</li>
              <li>Gương sinh viên, giảng viên, đoàn viên học tập và làm theo Bác.</li>
              <li>Sản phẩm truyền thông, bài viết, infographic, video ngắn.</li>
              <li>Album ảnh theo năm học, Tháng Thanh niên và chủ điểm tháng 5.</li>
            </ul>
          </Card>
          <div className="grid gap-5 md:grid-cols-2">
            {roleModelActivities.map((activity) => (
              <Card key={activity.title} className="overflow-hidden">
                <ImagePlaceholder
                  path={activity.imagePath}
                  alt={`Ảnh hoạt động: ${activity.title}`}
                  aspectRatio="16/10"
                  className="rounded-none"
                />
                <div className="p-4">
                  <Badge variant="gold">{activity.year}</Badge>
                  <h3 className="mt-3 font-heading text-lg font-bold">
                    {activity.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-sub">
                    {activity.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={selectedStory !== null}
        onClose={() => setSelectedStory(null)}
        title={selectedStory?.title ?? ''}
      >
        {selectedStory && (
          <div className="space-y-5 text-sm leading-7 text-gray-sub">
            <p>{selectedStory.fullContent}</p>
            <div className="rounded-xl bg-lotus-light p-4">
              <p className="font-semibold text-ink">Bài học gợi ý</p>
              <p className="mt-2">{selectedStory.lesson}</p>
            </div>
            <div className="rounded-xl bg-leaf-green/10 p-4">
              <p className="font-semibold text-ink">Câu hỏi suy ngẫm</p>
              <p className="mt-2">{selectedStory.reflectionQuestion}</p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
