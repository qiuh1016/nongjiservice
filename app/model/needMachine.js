module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const NeedMachineSchema = new Schema({
    // 发布人的id
    userId: { type: String },
    // 订单状态 0:发布 1:进行中 2:完成 3:取消
    status: { type: Number },
    // 提供的农机类型
    machineType: { type: String },
    // 农机照片 id
    machinePics: [],
    // 农机主身份证照片 id
    ownnerIdCardPics: [],
    // 驾驶员身份证照片 id
    driverIdCardPics: [],
    // 农机简介
    descrition: { type: String },
    // 农机编号
    machineId: { type: String },
    // 是否可以外地作业
    allowOtherPlace: {type: Boolean},
    // 发布GPS坐标
    pulishPlace: {
      lat: { type: Number },
      lon: { type: Number }
    },
    // 可服务天数
    availableDays: { type: Number },
    // 联系人
    contactName: { type: String },
    // 联系电话
    contactPhone: { type: String },
  });

  return mongoose.model('NeedMachine', NeedMachineSchema);
}
