export interface Env {
    KEY_API_RESEND: string;
    FROM_RESEND: string;  
    TO_RESEND: string; 
}
export const RESEND = {
    id: env.KEY_API_RESEND,
    from: .env.FROM_RESEND,
    to: env.TO_RESEND
  }
