import BaseModel from "./BaseModel";
import User from "./User";

class Event extends BaseModel {
  id: string;
  name: string;
  modelId: string | undefined | null;
  actorId: string;
  actorIpAddress: string | undefined | null;
  documentId: string;
  collectionId: string | undefined | null;
  userId: string;
  createdAt: string;
  actor: User;
  data: {
    name: string;
    email: string;
    title: string;
    published: boolean;
    templateId: string;
  };

  get model() {
    return this.name.split(".")[0];
  }

  get verb() {
    return this.name.split(".")[1];
  }

  get verbPastTense() {
    const v = this.verb;
    if (v.endsWith("e")) return `${v}d`;
    return `${v}ed`;
  }
}

export default Event;