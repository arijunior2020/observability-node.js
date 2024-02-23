import requests
import time

# URL do endpoint do seu aplicativo
url = 'http://localhost:5000'

# Número de requisições a serem enviadas
num_requests = 100

# Envia as requisições
for i in range(num_requests):
    try:
        response = requests.get(url)
        print(f'Resposta da requisição {i + 1}: {response.status_code}')
    except Exception as e:
        print(f'Erro ao enviar requisição {i + 1}: {e}')
    time.sleep(1)  # Aguarda 1 segundo entre cada requisição
