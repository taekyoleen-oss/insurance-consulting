export function Footer() {
  const footerLinks = {
    company: {
      title: "회사",
      links: [
        { name: "회사소개", href: "#about" },
        { name: "전문가 소개", href: "#" },
        { name: "채용정보", href: "#" },
      ],
    },
    services: {
      title: "서비스",
      links: [
        { name: "법률 자문", href: "#services" },
        { name: "의료 자문", href: "#services" },
        { name: "상품 개발", href: "#services" },
        { name: "클레임 관리", href: "#services" },
      ],
    },
    resources: {
      title: "자료실",
      links: [
        { name: "뉴스레터", href: "#" },
        { name: "사례 연구", href: "#" },
        { name: "법률 정보", href: "#" },
      ],
    },
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">IC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">보험자문</span>
                <span className="text-xs opacity-80">Insurance Consulting</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-4">보험사를 위한 전문 법률·의료 자문 서비스</p>
            <p className="text-xs opacity-60">© 2025 Insurance Consulting. All rights reserved.</p>
          </div>

          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs opacity-60">
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-100 transition-opacity">
                개인정보처리방침
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                이용약관
              </a>
            </div>
            <div>사업자등록번호: 123-45-67890 | 대표: 홍길동</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
