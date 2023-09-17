package blog.backend.handler;

import org.springframework.http.HttpStatus;

public class MaybeException extends RuntimeException{
    private HttpStatus httpStatus;

    public void MayoException(HttpStatus httpStatus,String message){
        // super(message);
        this.httpStatus = httpStatus;
    }

    public HttpStatus getHttpStatus(){
        return httpStatus;
    }
}