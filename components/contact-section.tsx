"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      label: "전화",
      value: "02-1234-5678",
    },
    {
      icon: Mail,
      label: "이메일",
      value: "contact@insurance-consulting.com",
    },
    {
      icon: MapPin,
      label: "주소",
      value: "서울특별시 강남구 테헤란로 123",
    },
  ]

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 bg-muted">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">상담 문의</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            보험 관련 법률·의료 자문이 필요하시면 언제든지 연락주시기 바랍니다
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    담당자명 *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="홍길동"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    회사명 *
                  </label>
                  <Input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="ABC보험"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    이메일 *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    연락처 *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="010-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  문의 내용 *
                </label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="자문이 필요한 내용을 상세히 작성해 주세요"
                />
              </div>

            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-6">연락처 정보</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">{info.label}</div>
                      <div className="text-base text-foreground">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">운영 시간</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>평일: 09:00 - 18:00</p>
                <p>토요일: 09:00 - 13:00</p>
                <p>일요일 및 공휴일: 휴무</p>
                <p className="text-sm text-accent-foreground mt-4">* 긴급 자문은 24시간 대응 가능합니다</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
