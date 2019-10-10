./node_modules/.bin/proto-loader-gen-types \
  --longs=String \
  --enums=String \
  --defaults \
  --oneofs \
  --grpcLib=@grpc/grpc-js \
  --outDir=src/generated/ \
  investAPI/src/docs/contracts/*.proto