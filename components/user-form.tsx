"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { api } from "@/lib/axios"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Mail, Lock, Phone, Building2, CheckCircle2, Loader2 } from "lucide-react"

export function UserForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    edad: "",
  })


  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSuccess(true)

    // Reset después de mostrar éxito
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({
        name: "",
      
        email: "",
       edad:"",
      })
    }, 2000)
  }

  if (isSuccess) {
    return (
      <Card className="w-full max-w-2xl mx-auto border-0 shadow-xl">
        <CardContent className="flex flex-col items-center justify-center py-16">
          <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-in zoom-in duration-300">
            <CheckCircle2 className="size-10 text-primary" />
          </div>
          <h3 className="text-2xl font-semibold text-foreground mb-2">¡Usuario creado exitosamente!</h3>
          <p className="text-muted-foreground">El nuevo usuario ha sido registrado en el sistema.</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto border-0 shadow-xl">
      <CardHeader className="space-y-1 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <User className="size-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">Nuevo Usuario</CardTitle>
            <CardDescription className="text-muted-foreground">
              Complete la información para registrar un nuevo usuario
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Información Personal */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Información Personal</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    id="name"
                    placeholder=""
                    className="pl-10 h-11 bg-muted/50 border-0 focus-visible:bg-background focus-visible:ring-2"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Contacto</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder=""
                    className="pl-10 h-11 bg-muted/50 border-0 focus-visible:bg-background focus-visible:ring-2"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edad">Edad</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    id="edad"
                    type="edad"
                    placeholder=""
                    className="pl-10 h-11 bg-muted/50 border-0 focus-visible:bg-background focus-visible:ring-2"
                    value={formData.edad}
                    onChange={(e) => handleInputChange("edad", e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Botones */}
          <div className="flex items-center justify-end gap-3 pt-6 border-t border-border">
            <Button type="button" variant="outline" className="h-11 px-6 bg-transparent">
              Cancelar
            </Button>
            <Button type="submit" className="h-11 px-8" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="size-4 mr-2 animate-spin" />
                  Creando...
                </>
              ) : (
                "Crear Usuario"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
    
  )
}
