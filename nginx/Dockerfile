FROM nginx:1.24.0
# Remove the default Nginx configuration
RUN rm /etc/nginx/nginx.conf
COPY index.html /usr/share/nginx/html/index.html
# Copy our custom Nginx config
COPY nginx.conf /etc/nginx/nginx.conf
# Expose port 80 for incoming requests
EXPOSE 80
# Start Nginx
CMD ["nginx", "-g", "daemon off;"]