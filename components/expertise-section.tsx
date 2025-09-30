import { CheckCircle2 } from "lucide-react"

export function ExpertiseSection() {
  const expertiseAreas = [
    {
      category: "통계 활용 법률 지원",
      items: ["보험사의 보유 통계에 대한 국내 법률에 적합하게 개인정보 익명화 등의 가공을 통해 외부 데이터와의 결합 및 다양한 분석 방향을 지원합니다."],
    },
    {
      category: "의료 데이터 분석 지원",
      items: ["보유 및 외부 의료 데이터의 실제 병원에서 활용하는 방안 및 의적 기준 설명하고 이에 대한 활용 및 가공 방법을 전문의를 통해 지원합니다."],
    },
    {
      category: "일본 시장 자료 조사 및 번역",
      items: ["국내와 유사한 일본 보험시장 및 신상품에 대한 정보를 제공하고, 보험과 관련된 통계제공 업체, 간병업체, 신탁 등 고령화에 따른 선진 보험시장 동향 및 전문가 초청 세미나를 개최합니다."],
    },
  ]

  return (
    <section id="expertise" className="py-24 px-6 lg:px-8 bg-muted">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">기술지원분야</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            보험사의 성공적인 비즈니스를 위한 맞춤형 기술지원 서비스
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">{area.category}</h3>
              <ul className="space-y-4">
                {area.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
