#########
# First stage to build the binary
FROM golang:1.20-alpine AS BUILDER

ENV APP /src/journiz/
ENV WORKDIR ${GOPATH}${APP}

WORKDIR ${WORKDIR}
COPY go.mod ${WORKDIR}
COPY go.sum ${WORKDIR}

RUN go mod download

COPY *.go ${WORKDIR}
COPY migrations ${WORKDIR}/migrations

RUN go build -o /journiz



#########
# second stage to obtain a small image
FROM alpine

ENV SERVER_HOST="0.0.0.0"
ENV SERVER_PORT=8090

COPY --from=builder /journiz /
RUN mkdir /pb_data

EXPOSE ${SERVER_PORT}
CMD /journiz serve --http ${SERVER_HOST}:${SERVER_PORT}
