import { IUser } from "../auth/types";
import { IBrand } from "../settings/brands/types";
import { IIntegration } from "../settings/integrations/types";
import { ITag } from "../tags/types";

export interface ICallout {
  title?: string;
  body?: string;
  buttonText?: string;
  featuredImage?: string;
  skip?: boolean;
}

interface ISubmission {
  customerId: string;
  submittedAt: Date;
}

export interface IForm {
  title?: string;
  code?: string;
  description?: string;
  buttonText?: string;
  themeColor?: string;
  callout: ICallout;
  createdUserId: string;
  createdUser: IUser;
  createdDate: Date;
  viewCount: number;
  contactsGathered: number;
  submissions: ISubmission[];
}

export interface IFormIntegration extends IIntegration {
  brand: IBrand;
  form: IForm;
  tags: ITag[];
  createdUser: IUser;
}

export interface IFormField {
  _id?: string;
  type?: string;
  name?: string;
  text?: string;
  description?: string;
  isRequired?: boolean;
  formId?: string;
  order?: number;
  options?: string[];
  validation?: string;
}
