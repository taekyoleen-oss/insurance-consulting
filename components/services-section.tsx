import { Scale, FileText, Shield, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: Scale,
      title: "자문서비스",
      description: "보험 관련 법률 검토, 계약서 작성, 분쟁 해결 등 법적 또는 의적 위험도 평가를 통합 분석으로 실시하여 전문적인 자문을 제공합니다.",
      details: [
        "보험관련 법적 및 의적 위험도 평가(통합 분석)",
        "외부 용역시 법률 검토 및 의적 검토를 통한 업무 명확화",
        "보험사와 법률 및 의료 전문가와의 의사소통 지원",
        "기타 보험 운영상의 위험에 대한 상시 자문"
      ]
    },
    {
      icon: FileText,
      title: "상품개발 지원",
      description: "신담보 개발에 따른 법률 및 의료 자문을 실시하고, 담보 및 상품특성에 맞게 약관을 정비하고 일관되게 수립토록 지원합니다.",
      details: [
        "신담보 개발에 따른 법률 및 의료 자문",
        "법률 및 의료 관련 데이터의 분류 및 체계화",
        "해외 신상품 도입시 국내 적용시 컨설팅/협업"
      ]
    },
    {
      icon: Shield,
      title: "클레임 관리",
      description: "보험금 지급시 법적 또는 의적 기준에 세부 내용을 설정하고, 보험금 청구 검토, 사고 조사, 손해사정 지원 등 클레임 관련 전문 자문을 제공하여 분쟁을 최소화를 지원합니다.",
      details: [
        "보험금 지급시 세부 기준 수립 자문",
        "법률 및 의료 전문가를 통한 클레임 적정성 지원",
        "보장 내용에 따른 약관 내용 보완 및 명확화"
      ]
    },
    {
      icon: Globe,
      title: "해외 상품/서비스 도입 지원",
      description: "일본 등 유사 해외시장의 상품 및 서비스를 조사하고 이를 국내에 적합되게 법적, 의적 검토를 통해 국내에서 개발이 가능하도록 지원합니다.",
      details: [
        "일본보험시장에 대한 정보 제공",
        "주요 보험사 최근 개발 상품",
        "주요 통계 제공 업체 소개 및 지원 현황",
        "일본 전문가 초청 세미나 지원"
      ]
    },
  ]

  return (
    <section id="services" className="py-24 px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">전문 서비스</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            보험사의 성공적인 비즈니스를 위한 맞춤형 법률·의료 자문 서비스
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
