FROM trion/ng-cli
COPY . /app
WORKDIR /app
RUN npm install
CMD ng serve --host 0.0.0.0
