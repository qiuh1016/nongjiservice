module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const RentMachineSchema = new Schema({
    // 发布人的id
    userId: { type: String },
    // 订单状态 0:发布 1:进行中 2:完成 3:取消
    status: { type: Number },
    // 需要的农机类型
    machineType: { type: String },
    // 作业地区照片 id
    workPlacePics: [],
    // 作业地区GPS坐标
    workPlace: {
      lat: { type: Number },
      lon: { type: Number }
    },
    // 作业地区特点
    workPlaceFeature: { type: String },
    // 作业地区面积
    area: { type: Number },
    // 当前位置的具体村组地块
    detailPlaceDesc: { type: String },
  });

  return mongoose.model('RentMachine', RentMachineSchema);
}
