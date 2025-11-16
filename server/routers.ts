import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContact } from "./db";
import { sendContactEmail } from "./email";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1, "Nome é obrigatório"),
          phone: z.string().min(1, "Telefone é obrigatório"),
          email: z.string().email("Email inválido"),
          service: z.string().min(1, "Selecione um serviço"),
          message: z.string().min(1, "Mensagem é obrigatória"),
        })
      )
      .mutation(async ({ input }) => {
        try {
          // Salvar no banco de dados
          await createContact({
            name: input.name,
            phone: input.phone,
            email: input.email,
            service: input.service,
            message: input.message,
          });

          // Enviar email
          const emailSent = await sendContactEmail(input);

          if (!emailSent) {
            console.warn("Email não foi enviado, mas contato foi salvo no banco");
          }

          return {
            success: true,
            message: "Contato recebido com sucesso!",
          };
        } catch (error) {
          console.error("Erro ao processar contato:", error);
          throw new Error("Erro ao processar sua solicitação");
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
