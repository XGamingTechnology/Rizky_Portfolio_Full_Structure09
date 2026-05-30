FROM nginx:alpine

# Copy static files
COPY index.html /usr/share/nginx/html/

# ⚠️ Sesuaikan path sesuai lokasi folder assets kamu:
# Jika assets ada di: frontend/src/assets/ → pakai baris di bawah
COPY src/assets/ /usr/share/nginx/html/assets/

# Jika assets ada di: frontend/assets/ → hapus tanda # di depan baris ini & hapus baris src/assets/ di atas
# COPY assets/ /usr/share/nginx/html/assets/

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -f /usr/share/nginx/html/index.nginx-debian.html

USER nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]