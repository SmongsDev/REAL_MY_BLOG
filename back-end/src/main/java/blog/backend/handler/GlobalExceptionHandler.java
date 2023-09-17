package blog.backend.handler;

import java.nio.file.AccessDeniedException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import blog.backend.dto.ResponseDto;
import blog.backend.dto.exception.CustomException;
import blog.backend.dto.exception.ErrorCode;
import blog.backend.dto.exception.ErrorResponse;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@ControllerAdvice(basePackages = "com.paynuri.v1")
public class GlobalExceptionHandler {

	/**
	 * javax.validation.Valid or @Validated 으로 binding error 발생시 발생한다.
	 * HttpMessageConverter 에서 등록한 HttpMessageConverter binding 못할경우 발생
	 * 주로 @RequestBody, @RequestPart 어노테이션에서 발생
	 */
	@ExceptionHandler(MethodArgumentNotValidException.class)
	protected ResponseDto<ErrorResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException e) {
		List<ErrorResponse.FieldError> errors = new ArrayList<>();
		for(FieldError fieldError : e.getFieldErrors()) {
			log.error("name:{}, message:{}", fieldError.getField(), fieldError.getDefaultMessage());
			ErrorResponse.FieldError error = new ErrorResponse.FieldError();
			error.setField(fieldError.getField());
			error.setMessage(fieldError.getDefaultMessage());

			errors.add(error);
		}

		ErrorResponse response = new ErrorResponse(ErrorCode.BAD_REQUEST, errors);
		return new ResponseDto<>(response.getStatus(), response);
	}
	/**
	 * enum type 일치하지 않아 binding 못할 경우 발생
	 * 주로 @RequestParam enum으로 binding 못했을 경우 발생
	 */
	@ExceptionHandler(MethodArgumentTypeMismatchException.class)
	protected ResponseDto<ErrorResponse> handleMethodArgumentTypeMismatchException(MethodArgumentTypeMismatchException e) {
		ErrorResponse response = new ErrorResponse(ErrorCode.BAD_REQUEST);
		return new ResponseDto<>(response.getStatus(), response);
	}

	/**
	 * 지원하지 않은 HTTP method 호출 할 경우 발생
	 */
	@ExceptionHandler(HttpRequestMethodNotSupportedException.class)
	protected ResponseDto<ErrorResponse> handleHttpRequestMethodNotSupportedException(HttpRequestMethodNotSupportedException e) {
		ErrorResponse response = new ErrorResponse(ErrorCode.METHOD_NOT_ALLOWED);
		return new ResponseDto<>(response.getStatus(), response);
	}

	/**
	 * Authentication 객체가 필요한 권한을 보유하지 않은 경우 발생합
	 */
	@ExceptionHandler(AccessDeniedException.class)
	protected ResponseDto<ErrorResponse> handleAccessDeniedException(AccessDeniedException e) {
		ErrorResponse response = new ErrorResponse(ErrorCode.ACCESS_DENIED);
		return new ResponseDto<>(response.getStatus(), response);
	}

	/**
	 * Business Logic 수행 중 발생시킬 커스텀 에러
	 */
	@ExceptionHandler(value = { CustomException.class })
	protected ResponseDto<ErrorResponse> handleCustomException(CustomException e) {
		ErrorResponse response = new ErrorResponse(ErrorCode.BAD_REQUEST); // CustomException에 ErrorCode Enum 반환
		return new ResponseDto<>(response.getStatus(), response);
	}
	
	/**
	 * 위에 해당하는 예외에 해당하지 않을 때 모든 예외를 처리하는 메소드
	 */
	@ExceptionHandler(Exception.class)
	protected ResponseDto<ErrorResponse> handleException(Exception e) {
		e.printStackTrace();
		ErrorResponse response = new ErrorResponse(ErrorCode.SERVER_ERROR);
		return new ResponseDto<>(response.getStatus(), response);
	}
    // @ExceptionHandler(MaybeException.class)
    // public ResponseDto<String> handleException(MaybeException e){
    //     return new ResponseDto<>(e.getHttpStatus().value(), e.getMessage());
    // }
}