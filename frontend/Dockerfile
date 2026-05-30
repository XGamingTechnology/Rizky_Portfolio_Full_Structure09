FROM nginx:alpine

COPY index.html /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN rm -f /usr/share/nginx/html/index.nginx-debian.html

# ❌ HAPUS baris "USER nginx" sementara biar jalan dulu
# USER nginx

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]