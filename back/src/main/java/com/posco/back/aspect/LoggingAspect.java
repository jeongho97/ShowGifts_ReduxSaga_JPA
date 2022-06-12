package com.posco.back.aspect;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class LoggingAspect {
    @Around("execution(* com.posco.back.user.controller.*.*(..))")
    public Object loggerAround(ProceedingJoinPoint proceedingJoinPoint) throws Throwable{
        long beforeTimeMillis=System.currentTimeMillis();
        log.info("start : "+beforeTimeMillis);

        Object result=proceedingJoinPoint.proceed();
        long afterTimeMillis=System.currentTimeMillis();
        log.info("after : "+afterTimeMillis+" , 시간차 "+(afterTimeMillis-beforeTimeMillis) );
        return result;
    }
}
