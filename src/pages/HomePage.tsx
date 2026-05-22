import { useMemo, useState } from 'react';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import FilterTabs from '../components/ui/FilterTabs';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import Modal from '../components/ui/Modal';
import SearchBar from '../components/ui/SearchBar';
import SectionTitle from '../components/ui/SectionTitle';
import CloudPattern from '../components/patterns/CloudPattern';
import DrumPattern from '../components/patterns/DrumPattern';
import LotusWatermark from '../components/patterns/LotusWatermark';
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
    hasContent: true,
  },
];

const songs: Song[] = [
  {
    order: 1,
    title: 'Ai yêu Bác Hồ Chí Minh hơn thiếu niên nhi đồng',
    creator: 'Phong Nhã',
    performer: 'Thiếu nhi, hợp xướng',
    audioStatus: 'placeholder',
  },
  {
    order: 2,
    title: 'Ca ngợi Hồ Chủ tịch',
    creator: 'Văn Cao',
    performer: 'Hợp xướng',
    audioStatus: 'placeholder',
  },
  {
    order: 3,
    title: 'Hồ Chí Minh đẹp nhất tên Người',
    creator: 'Trần Kiết Tường',
    performer: 'Nhiều nghệ sĩ',
    audioStatus: 'placeholder',
  },
  {
    order: 4,
    title: 'Bác Hồ một tình yêu bao la',
    creator: 'Thuận Yến',
    performer: 'Nhiều nghệ sĩ',
    audioStatus: 'placeholder',
  },
  {
    order: 5,
    title: 'Người là niềm tin tất thắng',
    creator: 'Chu Minh',
    performer: 'Nhiều nghệ sĩ',
    audioStatus: 'placeholder',
  },
  {
    order: 6,
    title: 'Dấu chân phía trước',
    creator: 'Phạm Minh Tuấn',
    performer: 'Nhiều nghệ sĩ',
    audioStatus: 'placeholder',
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
    note: 'Gợi ý tư liệu về tượng đài/công trình tưởng niệm Hồ Chí Minh tại Nga. Cần bổ sung ảnh và kiểm chứng thông tin chi tiết.',
  },
  {
    id: 'france-montreuil',
    country: 'Pháp',
    region: 'chau-au',
    regionLabel: 'Châu Âu',
    city: 'Montreuil',
    imagePath: '/assets/images/monuments/france-montreuil.jpg',
    note: 'Gắn với không gian tưởng niệm Chủ tịch Hồ Chí Minh tại Montreuil. Cần bổ sung nguồn hình ảnh được phép sử dụng.',
  },
  {
    id: 'cuba-havana',
    country: 'Cuba',
    region: 'chau-my',
    regionLabel: 'Châu Mỹ',
    city: 'La Habana',
    imagePath: '/assets/images/monuments/cuba-havana.jpg',
    note: 'Phù hợp để giới thiệu tình hữu nghị Việt Nam - Cuba và sự kính trọng quốc tế dành cho Chủ tịch Hồ Chí Minh.',
  },
  {
    id: 'mexico-mexico-city',
    country: 'Mexico',
    region: 'chau-my',
    regionLabel: 'Châu Mỹ',
    city: 'Mexico City',
    imagePath: '/assets/images/monuments/mexico-mexico-city.jpg',
    note: 'Gợi ý mục bản đồ di sản quốc tế. Cần kiểm chứng tên địa điểm và năm khánh thành trước khi xuất bản.',
  },
  {
    id: 'india-kolkata',
    country: 'Ấn Độ',
    region: 'chau-a',
    regionLabel: 'Châu Á',
    city: 'Kolkata',
    imagePath: '/assets/images/monuments/india-kolkata.jpg',
    note: 'Có thể dùng để mở rộng chủ đề Chủ tịch Hồ Chí Minh trong tình đoàn kết Á - Phi.',
  },
  {
    id: 'madagascar-antananarivo',
    country: 'Madagascar',
    region: 'chau-phi',
    regionLabel: 'Châu Phi',
    city: 'Antananarivo',
    imagePath: '/assets/images/monuments/madagascar-antananarivo.jpg',
    note: 'Gợi ý tư liệu về sự lan tỏa hình ảnh Hồ Chí Minh tại châu Phi. Cần bổ sung nguồn kiểm chứng.',
  },
];

const stories: Story[] = [
  {
    id: 'doi-dep-bac-ho',
    title: 'Đôi dép giản dị',
    summary:
      'Câu chuyện gợi nhớ lối sống tiết kiệm, giản dị và gần gũi của Chủ tịch Hồ Chí Minh.',
    topics: ['Giản dị', 'Tiết kiệm', 'Nêu gương'],
    lesson:
      'Giản dị không phải là thiếu thốn, mà là biết đặt giá trị thật lên trên hình thức.',
    reflectionQuestion:
      'Trong học tập và sinh hoạt Đoàn, mình có thể thực hành tiết kiệm bằng việc cụ thể nào?',
    fullContent:
      'Không gian này nên kể câu chuyện bằng văn phong ngắn, có nguồn rõ ràng, kèm ảnh minh họa đôi dép hoặc hiện vật liên quan. Nội dung chính cần nhấn mạnh sự nhất quán giữa lời nói và lối sống của Người.',
  },
  {
    id: 'chiec-dong-ho',
    title: 'Chiếc đồng hồ',
    summary:
      'Một câu chuyện thường được dùng để nói về tinh thần đoàn kết, kỷ luật và vai trò của từng cá nhân trong tập thể.',
    topics: ['Đoàn kết', 'Kỷ luật', 'Trách nhiệm'],
    lesson:
      'Tập thể vận hành tốt khi mỗi người làm đúng phần việc của mình và tôn trọng phần việc của người khác.',
    reflectionQuestion:
      'Nếu ví lớp học hoặc chi đoàn như một chiếc đồng hồ, vị trí của bạn đang đóng góp ra sao?',
    fullContent:
      'Khi triển khai chính thức, nên bổ sung bản kể đã được kiểm chứng từ nguồn chính thống. Có thể thiết kế dạng “bài học 1 phút” để người xem đọc nhanh và tự trả lời câu hỏi.',
  },
  {
    id: 'bac-ho-voi-thieu-nhi',
    title: 'Bác Hồ với thiếu nhi',
    summary:
      'Nhóm câu chuyện thể hiện tình cảm của Bác dành cho thiếu niên, nhi đồng và niềm tin vào thế hệ tương lai.',
    topics: ['Thiếu nhi', 'Giáo dục', 'Tình thương'],
    lesson:
      'Yêu thương thế hệ trẻ cần đi cùng trách nhiệm giáo dục, khích lệ và tạo điều kiện để các em trưởng thành.',
    reflectionQuestion:
      'Đoàn Thanh niên của trường có thể làm gì để lan tỏa tinh thần chăm lo thế hệ trẻ?',
    fullContent:
      'Có thể xây thành cụm thẻ nhỏ gồm thư gửi thiếu nhi, ảnh tư liệu và các hoạt động thiếu nhi học tập theo 5 điều Bác Hồ dạy.',
  },
  {
    id: 'gan-dan-hieu-dan',
    title: 'Gần dân, hiểu dân, vì dân',
    summary:
      'Cụm nội dung về phong cách làm việc sâu sát, lắng nghe và tôn trọng nhân dân.',
    topics: ['Gần dân', 'Dân vận', 'Phục vụ'],
    lesson:
      'Muốn phục vụ cộng đồng hiệu quả thì phải bắt đầu từ việc lắng nghe nhu cầu thật của cộng đồng.',
    reflectionQuestion:
      'Một hoạt động tình nguyện sẽ tốt hơn thế nào nếu bắt đầu bằng khảo sát nhu cầu thực tế?',
    fullContent:
      'Phần này có thể liên kết với tác phẩm “Dân vận” và các hoạt động tình nguyện của Đoàn trường để tạo cầu nối giữa lịch sử và hành động hôm nay.',
  },
];

const sourceItems = [
  {
    title: 'Trang Không gian Văn hóa Hồ Chí Minh gốc trên Canva',
    description:
      'Dùng để tham khảo cấu trúc mục, cách tổ chức không gian, nhịp trình bày và tinh thần thiết kế.',
  },
  {
    title: 'Wikipedia tiếng Việt - Hồ Chí Minh',
    description:
      'Nguồn tham khảo mở cho tiểu sử tổng quan, tên gọi, mốc thời gian và bối cảnh lịch sử.',
  },
  {
    title: 'Tư liệu Văn kiện Đảng - Tiểu sử Chủ tịch Hồ Chí Minh',
    description:
      'Nguồn chính thống để đối chiếu các thông tin tiểu sử, sự nghiệp cách mạng và văn kiện.',
  },
  {
    title: 'Bộ data đã lọc trong repository',
    description:
      'Các file Markdown/JSON đã sắp xếp là nền nội dung để phát triển phiên bản chính thức.',
  },
];

const timelineTabs = [
  { id: 'all', label: 'Tất cả' },
  ...timelineData.map((period) => ({
    id: period.periodId,
    label: period.periodTitle,
  })),
];

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
  return year ? String(year) : 'Cần bổ sung';
}

export default function HomePage() {
  const [timelineFilter, setTimelineFilter] = useState('all');
  const [workFilter, setWorkFilter] = useState('all');
  const [monumentFilter, setMonumentFilter] = useState('all');
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});

  const filteredTimeline = useMemo(() => {
    if (timelineFilter === 'all') return timelineData;
    return timelineData.filter((period) => period.periodId === timelineFilter);
  }, [timelineFilter]);

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

  const setQuizAnswer = (questionId: number, optionIndex: number) => {
    setQuizAnswers((current) => ({ ...current, [questionId]: optionIndex }));
  };

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20"
      >
        <CloudPattern className="absolute inset-0" />
        <DrumPattern className="absolute -right-24 top-24 h-80 w-80 md:h-[30rem] md:w-[30rem]" opacity={0.05} />
        <LotusWatermark className="absolute -left-12 bottom-12 h-56 w-56 md:h-80 md:w-80" opacity={0.06} />

        <div className="section-container relative z-10 grid min-h-[calc(100vh-8rem)] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Badge variant="red">Không gian số học tập và lan tỏa</Badge>
            <h1 className="mt-5 max-w-4xl font-heading text-4xl font-bold leading-tight text-ink md:text-6xl">
              Không gian Văn hóa Hồ Chí Minh
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-sub md:text-lg">
              Một website tĩnh, tối giản và trang trọng để tìm hiểu cuộc đời,
              sự nghiệp, tư tưởng, đạo đức, phong cách Hồ Chí Minh; đồng thời
              kết nối với hoạt động học tập và làm theo Bác tại đơn vị.
            </p>

            <div className="mt-7 grid gap-3 text-sm text-gray-sub">
              <p>
                <span className="font-semibold text-ink">Cấp trên:</span>{' '}
                {unitInfo.party}
              </p>
              <p>
                <span className="font-semibold text-ink">Đơn vị:</span>{' '}
                {unitInfo.cell}
              </p>
              <p>
                <span className="font-semibold text-ink">Thực hiện:</span>{' '}
                {unitInfo.implementer}
              </p>
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

      <SilkDivider />

      <section className="section-container py-16 md:py-20">
        <SectionTitle
          id="ho-so"
          title="Hồ sơ Chủ tịch Hồ Chí Minh"
          subtitle="Phần tóm tắt nhanh để người xem nắm thông tin cốt lõi trước khi đi sâu vào từng không gian nội dung."
        />
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
            subtitle="Các mốc chính được chia theo giai đoạn để dễ học, dễ kể chuyện và dễ mở rộng thành bản đồ tương tác."
          />
          <FilterTabs
            tabs={timelineTabs}
            activeTab={timelineFilter}
            onTabChange={setTimelineFilter}
          />
          <div className="mt-8 grid gap-6">
            {filteredTimeline.map((period) => (
              <Card key={period.periodId} className="p-6">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <h3 className="font-heading text-xl font-bold">
                    {period.periodTitle}
                  </h3>
                  <Badge variant="pink">{period.periodId}</Badge>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {period.events.map((event) => (
                    <div
                      key={`${period.periodId}-${event.date}-${event.title}`}
                      className="rounded-lg border border-gray-border bg-ivory p-4"
                    >
                      <p className="font-heading text-sm font-bold text-lotus-pink">
                        {event.date}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-ink">
                        {event.title}
                      </p>
                      {event.summary && (
                        <p className="mt-2 text-xs leading-6 text-gray-sub">
                          {event.summary}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-16 md:py-20">
        <SectionTitle
          id="cuoc-doi"
          title="Địa điểm và hành trình cách mạng"
          subtitle="Mỗi thẻ là một điểm dừng nội dung: có thể phát triển thành bài viết, ảnh tư liệu, bản đồ hoặc trạm tham quan ảo."
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
            subtitle="Khu vực này nên vừa đọc được, vừa tương tác được, để người xem không chỉ xem tư liệu mà còn tự soi chiếu vào hành động."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {thoughtTopics.map((topic) => (
              <Card key={topic.id} className="p-5">
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
          subtitle="Có thể phát triển thành thư viện đọc, mỗi tác phẩm có tóm tắt, bối cảnh ra đời, trích đoạn ngắn và liên kết nguồn."
        />
        <FilterTabs
          tabs={workTabs}
          activeTab={workFilter}
          onTabChange={setWorkFilter}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredWorks.map((work) => (
            <Card key={work.id} className="p-5">
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
              <p className="mt-4 text-xs font-medium text-leaf-green">
                {work.hasContent
                  ? 'Đã có dữ liệu nền, nên bổ sung nguồn và bản trình bày.'
                  : 'Cần bổ sung nội dung.'}
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
            subtitle="Danh mục bài hát nên được triển khai bằng thẻ nghe thử hoặc liên kết video hợp lệ, không tự chép lời bài hát."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {songs.map((song) => (
              <Card key={song.order} className="p-5">
                <p className="font-heading text-3xl font-bold text-lotus-pink/50">
                  {String(song.order).padStart(2, '0')}
                </p>
                <h3 className="mt-3 font-heading text-xl font-bold">
                  {song.title}
                </h3>
                <p className="mt-3 text-sm text-gray-sub">
                  Sáng tác: <span className="text-ink">{song.creator}</span>
                </p>
                <p className="mt-1 text-sm text-gray-sub">
                  Trình bày gợi ý:{' '}
                  <span className="text-ink">{song.performer}</span>
                </p>
                <p className="mt-4 rounded-lg bg-lotus-light px-3 py-2 text-xs text-gray-sub">
                  Cần bổ sung file audio/video hợp lệ trong thư mục
                  /assets/audio.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container py-16 md:py-20">
        <SectionTitle
          id="tuong-dai"
          title="Tượng đài và không gian tưởng niệm trên thế giới"
          subtitle="Phần này giúp mở rộng góc nhìn: di sản Hồ Chí Minh không chỉ ở Việt Nam mà còn được bạn bè quốc tế trân trọng."
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
                    <span className="text-xs text-gray-sub">
                      {monument.city}
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-heading text-xl font-bold">
                  {monument.country}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-sub">
                  {monument.note}
                </p>
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
            subtitle="Mỗi câu chuyện nên đi kèm bài học và câu hỏi suy ngẫm để biến phần đọc thành hoạt động giáo dục."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {stories.map((story) => (
              <Card key={story.id} className="p-5">
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
            <Badge variant="red">Đề xuất cấu trúc</Badge>
            <h3 className="mt-4 font-heading text-2xl font-bold">
              Từ không gian tư liệu đến không gian hành động
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-gray-sub">
              <li>Hoạt động học tập chuyên đề của Chi bộ và Đoàn trường.</li>
              <li>Gương sinh viên, giảng viên, đoàn viên học tập và làm theo Bác.</li>
              <li>Sản phẩm truyền thông, bài viết, infographic, video ngắn.</li>
              <li>Album ảnh theo năm học và theo chủ điểm tháng 5.</li>
            </ul>
          </Card>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              'Sinh hoạt chuyên đề',
              'Hoạt động Đoàn Thanh niên',
              'Gương sáng học tập',
              'Sản phẩm truyền thông',
            ].map((title, index) => (
              <Card key={title} className="overflow-hidden">
                <ImagePlaceholder
                  path={`/assets/images/role-models/hoat-dong-${index + 1}.jpg`}
                  alt={`Ảnh minh họa: ${title}`}
                  aspectRatio="16/10"
                  className="rounded-none"
                />
                <div className="p-4">
                  <h3 className="font-heading text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-gray-sub">
                    Cần bổ sung dữ liệu thật từ đơn vị trước ngày xuất bản.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/70 py-16 md:py-20">
        <div className="section-container">
          <SectionTitle
            id="nguon"
            title="Nguồn tham khảo và danh mục cần bổ sung"
            subtitle="Phần bắt buộc để website có độ tin cậy: nguồn, ảnh, audio/video và ghi chú bản quyền phải rõ ràng."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {sourceItems.map((source) => (
              <Card key={source.title} className="p-5">
                <h3 className="font-heading text-xl font-bold">
                  {source.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-sub">
                  {source.description}
                </p>
              </Card>
            ))}
          </div>
          <Card className="mt-6 p-6" hover={false}>
            <h3 className="font-heading text-xl font-bold">
              Checklist tài nguyên trước khi xuất bản
            </h3>
            <div className="mt-4 grid gap-3 text-sm text-gray-sub md:grid-cols-2">
              <p>Ảnh chân dung và ảnh tư liệu có quyền sử dụng.</p>
              <p>Ảnh địa điểm: Kim Liên, Dục Thanh, Bến Nhà Rồng, Ba Đình.</p>
              <p>Ảnh tượng đài quốc tế kèm nguồn và ghi chú kiểm chứng.</p>
              <p>Audio/video bài hát chỉ nhúng từ nguồn hợp pháp.</p>
              <p>Thông tin hoạt động thật của Chi bộ và Đoàn trường.</p>
              <p>Trang nguồn riêng để đối chiếu Wikipedia và Tư liệu Văn kiện Đảng.</p>
            </div>
          </Card>
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
