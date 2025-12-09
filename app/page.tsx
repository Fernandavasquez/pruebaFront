import { UserForm } from "@/components/user-form"

export default function Page() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-foreground mb-2">Panel de Administración</h1>
          <p className="text-muted-foreground">Gestiona los usuarios de tu organización</p>
        </div>
        <UserForm />
      </div>
    </main>
  )
}
