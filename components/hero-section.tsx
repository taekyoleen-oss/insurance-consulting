import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-muted to-background">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent-foreground">
            <span className="h-2 w-2 rounded-full bg-accent"></span>
            신뢰와 전문성의 파트너
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight text-balance">
            보험사를 위한
            <br />
            <span className="text-foreground">법률·의료 전문 자문</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed text-pretty max-w-2xl mx-auto">
            보험상품 개발부터 클레임 관리까지, 법률 및 의료 전문가가 제공하는 체계적이고 신뢰할 수 있는 컨설팅 서비스
          </p>

        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  )
}
