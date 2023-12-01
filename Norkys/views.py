from django.shortcuts import render

from gestion_datos.models import producto

def index(request):
    return render(request,'index.html')
def tarjeta(request):
    return render(request,"tarjeta.html")
def categorias(request):
    return render(request,"categorias.html")
def contacto(request):
    return render(request,"contacto.html")
def Info(request):
    return render(request,"info.html")
def Registrar(request):
    return render(request,"Registrarse.html")
def contraseña(request):
    return render(request,"contraseña.html")
def usuario(request):
    return render(request,"usuario.html")
def pop(request):
    return render(request,"pop.html")
def nosotros(request):
    return render(request,"Nosotros.html")